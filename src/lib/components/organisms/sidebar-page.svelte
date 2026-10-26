<script>
    import { page } from '$app/state';


// Geïmporteerde favicons
    import sidebar from '#lib/assets/Sidebar.svg';
    import daydetail from '#lib/assets/daydetail.svg';
    import groups from '#lib/assets/groups.svg';
    import locations from '#lib/assets/locations.svg';
    import overview from '#lib/assets/overview.svg';
    import scans from '#lib/assets/scans.svg';
    import selector from '#lib/assets/selector.svg';
    import support from '#lib/assets/support.svg';
    import trends from '#lib/assets/trends.svg';
    import logoctc from '#lib/assets/logo-ctc.svg';
    import logominctc from '#lib/assets/logo-min-ctc.svg';

    let { data } = $props();


</script>


<div class="collapsible-menu">

    <nav class="menu-content" id="side-menu"> 

        <div class="logodiv">
            <a href="/dashboard">
                <img src={logoctc} alt="coding the curbs" class="logo" height="32" width="93.45" fetchpriority="high">
                <img src={logominctc} alt="" class="logo-min" height="40" width="40">
            </a>
        </div>

        <div class="data-insights">
            <h2>Data & Insights</h2>
            <ul class="data-insights-list">
                <!-- aria-current markeert de actieve pagina voor screenreaders én voor de highlight in CSS -->
                <li><a href="/" aria-current={page.url.pathname === '/dashboard/overview' ? 'page' : undefined}><img src={overview} alt=""><span>Overview</span></a></li>
                <li><a href="/" aria-current={page.url.pathname === '/dashboard/trends' ? 'page' : undefined}><img src={trends} alt=""><span>Trends</span></a></li>
                <li><a href="/" aria-current={page.url.pathname === '/dashboard/daydetail' ? 'page' : undefined}><img src={daydetail} alt=""><span>Day detail</span></a></li>
            </ul>
        </div>

        <hr>

        <div class="manage">
            <h2>Manage</h2>
            <ul class="manage-list">
                <li><a href="/" aria-current={page.url.pathname === '/dashboard/locations' ? 'page' : undefined}><img src={locations} alt=""><span>Locations</span></a></li>
                <li><a href="/" aria-current={page.url.pathname === '/dashboard/groups' ? 'page' : undefined}><img src={groups} alt=""><span>Groups</span></a></li>
                <li><a href="/" aria-current={page.url.pathname === '/dashboard/selections' ? 'page' : undefined}><img src={selector} alt=""><span>Selections</span></a></li>
            </ul>
        </div>

        <hr>

        <div class="quickscan">
            <h2>Quickscan</h2>
            <ul class="quickscan-list">
                <li><a href="/quickscan" aria-current={page.url.pathname === '/dashboard/quickscan' ? 'page' : undefined}><img src={scans} alt=""><span>Quickscan</span></a></li>
            </ul>
        </div>

        <div class="profile">
            <ul class="profile-list">
                <li><a href="/"><img src={support} alt=""><span>Support</span></a></li>
                <li><a href="/"><span>Profiel</span></a></li>
            </ul>
        </div>
    </nav>

    <input id="menu" class="visually-hidden" type="checkbox">
    <label for="menu"><img class="menu-svg" src="{sidebar}" alt="Menu in- of uitklappen"></label>

</div>

<style>

    .collapsible-menu {
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
    }

    
    .collapsible-menu:has(:checked) {
        .menu-content { width: 3rem }
        .logo { display: none}
        .logo-min { display: block}
        span{overflow: hidden;}
        h2 {display: none;}
    }


    .menu-content {
        background-color: var(--component-background);
        color: var(--text-color);
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 250px;
    }

    .logodiv {
        padding: 0 8px;
    }

    .logo {
        padding: 1rem .25rem;
    }

    .logo-min {
        display: none;
        padding: 1rem 0 1rem;
    }

    .data-insights,
    .manage,
    .quickscan,
    .profile  {
        padding: 8px;
    }

    h2 {
        font-size: 13px;
        font-weight: 500;
        padding: 0 8px;
        margin: 0 0 .5rem;
        opacity: .6;
    }

    hr {
        width: 100%;
        margin: 0 ;
        opacity: .2;
    }


    ul {
        list-style: none; 
        padding: 0;   
        margin: 0;    
    }

    a {
        text-decoration: none;
    }

    li a {
        display: flex;
        align-items: center;
        gap: .3rem;
        font-weight: 400;
        padding: .3rem .5rem;
    }

    li a[aria-current="page"]{
        background-color: var(--active-state);
        border-radius: var(--border-radius);
    }

    a:hover {
        background-color: var(--active-state);
        border-radius: var(--border-radius);
    }

    li img {
        width: 15px;
        height: 15px;
    }


    .profile {
        margin-top: auto;
    }


    input {
        align-self: flex-start;
    }

    label {
        display: flex;
        align-items: center;
        align-self: flex-start;
        margin: .5rem;
        padding: .5rem;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: background-color .15s;
    }

    label:hover {
        background-color: var(--hover-color);
    }


</style>
