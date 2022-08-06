<?php

namespace App\Http\Controllers\Website;

use App\Models\Faq;
use App\Models\Plan;
use App\Models\Post;
use AmrShawky\Currency;
use App\Models\Feature;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Midtrans\CreateSnapTokenService;

class WebsiteController extends Controller
{
    public function home()
    {
        $faqs = Faq::all();
        $features = Feature::all();
        $testimonials = Testimonial::all();
        $plans = Plan::with('planFeatures')->whereStatus(1)->get();

        return view('website.home', compact('faqs', 'features', 'testimonials', 'plans'));
    }

    public function about()
    {
        $testimonials = Testimonial::all();

        return view('website.about', compact('testimonials'));
    }

    public function pricing()
    {
        $faqs = Faq::all();
        $plans = Plan::with('planFeatures')->whereStatus(1)->get();

        return view('website.pricing', compact('faqs', 'plans'));
    }

    public function blog()
    {
        $posts = Post::select('id', 'title', 'slug', 'thumbnail', 'short_description')
            ->latest()
            ->paginate(12);

        return view('website.blog', compact('posts'));
    }

    public function blogDetails(Post $post)
    {
        $post->increment('total_views');
        $post->load('user');
        $popular_posts = Post::select('id', 'title', 'slug', 'thumbnail')
            ->latest('total_views')
            ->limit(4)
            ->get();
        $latest_posts = Post::select('id', 'title', 'slug', 'thumbnail')
            ->where('id', '!=', $post->id)
            ->latest()
            ->limit(3)
            ->get();

        return view('website.blog-details', compact(
            'post',
            'popular_posts',
            'latest_posts'
        ));
    }

    public function contact()
    {
        return view('website.contact');
    }

    public function planDetails(Plan $plan)
    {
        // session data storing
        session(['plan' => $plan]);
        session(['stripe_amount' => currencyConversion($plan->price) * 100]);
        session(['razor_amount' => currencyConversion(50, null, 'INR', 1) * 100]);

        // midtrans snap token
        if (config('kodebazar.midtrans_active') && config('kodebazar.midtrans_id') && config('kodebazar.midtrans_key') && config('kodebazar.midtrans_secret')) {
            $midtrans_amount = round(currencyConversion($plan->price, null, 'IDR', 1));
            $order_id = uniqid();

            session(['midtrans_amount' => $midtrans_amount]);
            session(['midtrans_order_id' => $order_id]);

            $order['order_no'] = $order_id;
            $order['total_price'] = $midtrans_amount;

            $midtrans = new CreateSnapTokenService($order);
            $snapToken = $midtrans->getSnapToken();
        }

        return view('website.plan_details', [
            'plan' => $plan,
            'mid_token' => $snapToken ?? null,
        ]);
    }
}
