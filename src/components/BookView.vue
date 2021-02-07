<template lang="">
    <div class="book-view">
        <h1 class="title">{{ title }}</h1>
    </div>
</template>
<script>
export default {
    name: 'BookView',
    data() {
        return {
            title: '40 Stephen King novels'
        };
    }
}
</script>
<style>
    .title {
        font-weight: normal;    
    }
</style>
