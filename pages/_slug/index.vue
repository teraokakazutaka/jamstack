<template>
	<main class="main">
		<h1 class="title">{{ title }}</h1>
		<p class="publishedAt">{{ publishedAt }}</p>
		<div class="post" v-html="body"></div>
	</main>
</template>

<script>
import axios from 'axios'

export default {
	async asyncData({ params }) {
		const { data } = await axios.get(
			`https://my-jamstack.microcms.io/api/v1/blog/${params.slug}`,
			{
				headers: {
					'X-API-KEY': '4a71bee4-5137-4796-a0ef-cd69954def7c',
				},
			}
		)
		return data
	},
}
</script>
