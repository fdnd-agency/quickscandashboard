<script>
   	import sidebar from '$lib/assets/Sidebar.svg';
    import daydetail from '$lib/assets/daydetail.svg';
    import groups from '$lib/assets/groups.svg';
    import locations from '$lib/assets/locations.svg';
    import overview from '$lib/assets/overview.svg';
    import scans from '$lib/assets/scans.svg';
    import selector from '$lib/assets/selector.svg';
    import support from '$lib/assets/support.svg';
    import trends from '$lib/assets/trends.svg';
    import logoctc from '$lib/assets/logo-ctc.svg';
    import logominctc from '$lib/assets/logo-min-ctc.svg';

</script>


<div class="collapsible-menu">

    <nav class="menu-content" id="side-menu"> 

        <a href="/dashboard">
            <img src={logoctc} alt="coding the curbs" class="logo" height="40" width="80">
            <img src={logominctc} alt="" class="logo-min" height="40" width="40">
        </a>

        <h2>Data & Insights</h2>
        <ul class="data-insights">
            <li><a href="/"><img src={overview} alt=""><span>Overview</span></a></li>
            <li><a href="/"><img src={trends} alt=""><span>Trends</span></a></li>
            <li><a href="/"><img src={daydetail} alt=""><span>Day detail</span></a></li>
        </ul>

        <hr>

        <h2>Manage</h2>
        <ul class="manage">
            <li><a href="/"><img src={locations} alt=""><span>Locations</span></a></li>
            <li><a href="/"><img src={groups} alt=""><span>Groups</span></a></li>
            <li><a href="/"><img src={selector} alt=""><span>Selections</span></a></li>
        </ul>

        <hr>

        <h2>Quickscan</h2>
        <ul class="quickscan">
            <li><a href="/quickscan"><img src={scans} alt=""><span>Quickscan</span></a></li>
        </ul>

        <ul class="profile">
            <li><a href="/"><img src={support} alt=""><span>Support</span></a></li>
            <li><a href="/"><span>Profiel</span></a></li>
        </ul>
    </nav>

    <input id="menu" type="checkbox">
    <label for="menu"><img class="menu-svg" src="{sidebar}" alt="">Menu</label>

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
        span {  position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; border: 0; }
        h2 {display: none;}
    }


    input:focus-visible + label{
        outline: 2px solid white;
        border-radius: 3px;

    }

    .logo {
        padding: 1rem .25rem;
    }

    .logo-min {
        display: none;
        padding: 1rem 0 1rem;
    }

    h2 {
        font-size: 11px;
    }

    .menu-content {
        background-color: var(--light-background);
        color: var(--text-color);
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        height: 100%;
        width: 250px;
    }

    ul {
        list-style: none; 
        padding: 0;       
    }

    li {
        display: flex;
        padding: 5px;
    }

    span {
        padding-left: 5px;
    }

    .profile {
        margin-top: auto;
    }

    .menu-svg {
        padding: 1rem;
    }

    input {
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; width: 1px; 
        margin: -1px; padding: 0; border: 0; 
        /* al bovenstaande code is om een checkbox visueel te verbergen maar wel zichtbaar te houden voor screenreaders */
        align-self: flex-start;
    }

</style>