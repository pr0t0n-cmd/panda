<script>
    import { articles } from '$lib/data/articles.json'
    import LiDropdown from '$lib/components/LiDropdown.svelte'
    // // Import the functions you need from the SDKs you need
    // import { initializeApp } from "firebase/app";
    // import { getAnalytics } from "firebase/analytics";
    // // TODO: Add SDKs for Firebase products that you want to use
    // // https://firebase.google.com/docs/web/setup#available-libraries

    // // Your web app's Firebase configuration
    // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //     apiKey: "AIzaSyBCZHISfsZrDzAbDmzCTL8YMGeYeV1h77U",
    //     authDomain: "panda-44de3.firebaseapp.com",
    //     projectId: "panda-44de3",
    //     storageBucket: "panda-44de3.appspot.com",
    //     messagingSenderId: "123172133112",
    //     appId: "1:123172133112:web:1cdcf4dcfb1159e618430d",
    //     measurementId: "G-M18LEGPQ3W"
    // };

    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
</script>
<div>
    <header>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
                <LiDropdown content={articles} />
            </li>
        </ul>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        Footer - thecodingpanda.dev
    </footer>
</div>

<style>
    ul{
        display: flex;
        flex-direction: row;
    }
    li{
        position: relative;
        padding: .25rem .75rem;
        margin: 0 .125rem;
        list-style-type: none;
        background: linear-gradient(180deg, #93ff00 0%, #2be40f 100%);
        border: 1px solid #222222;
    }
    a{
        text-decoration: none;
        font-weight: bold;
    }
    header{
        padding: 2rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    main{
        position: relative;
        padding: .5rem 3rem;
        flex: 1;
    }
    footer{
        padding: 2rem 3rem;
    }
    div{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }
</style>