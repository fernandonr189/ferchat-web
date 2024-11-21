<script>
    import { Link } from "svelte-routing";
</script>

<div class="hero bg-slate-800 page px-8">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            class="max-w-sm rounded-lg shadow-2xl" />
        <div>
            <h1 class="text-5xl font-bold">Real-time chat!</h1>
            <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
            </p>
            <Link to="/signup" class="btn btn-primary">Get Started</Link>
        </div>
    </div>
</div>
