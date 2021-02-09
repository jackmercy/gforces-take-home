<template>
    <footer class="footer">
        <hr/>
        <div class="container">
            <div class="name">{{ dev }}</div>
            <div class="social">
                <a class="linkedin" href="https://www.linkedin.com/in/khoi-cao-minh-687098200/" target="_blank"><i class="fa fa-linkedin"></i></a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter',
        data: () => ({
            dev: 'Minh Khôi'
        })
    }
</script>

<style scoped>
    .footer {
        padding: 1rem;
        padding-top: 0;
        margin-top: 1rem;
        background-color:#fefefe;
        text-align: center;
        z-index: 200;
    }
    .container {
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
    }
    .name {
        padding-top: 11px;
    }
    .social a {
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin-left: 6px;
        margin-right: 0;
        border-radius: 100%;
        background-color: #33353d;
        color: #818a91;
        font-size: 16px;
        display: inline-block;
        text-align: center;
        transition: all .2s linear;
    }
    .social a:hover {
        color: white;
    }
    .social a.linkedin:hover
    {
        background-color:#007bb6
    }
</style>