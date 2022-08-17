<template>
	<router-link :to="'/post/' + post.id" class="block no-underline w-full md:w-1/2 lg:w-1/3 p-4">
		<div class="p-4 rounded-sm shadow-md h-full">
			<h3>{{ post.title }}</h3>
			<p>{{ post.body }}</p>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style></style>
