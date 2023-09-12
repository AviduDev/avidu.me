<script>
	export let form;
</script>

<div class="wrapper">
	<form method="POST" class="container">

		<!-- email -->
		<div class="input">
			<label for="email">Your Email*</label>
			<input type="email" name="email" id="email" required />
		</div>

		<!--  -->
		<div class="input">
			<p>What kind of site u need?</p>

			<div>
				<input type="radio" id="business" name="website" value="business" checked />
				<label for="business">Business Website</label>
			</div>

			<div>
				<input type="radio" id="ecommerce" name="website" value="ecommerce" />
				<label for="ecommerce">E-commerce website</label>
			</div>

			<div>
				<input type="radio" id="portfolio" name="website" value="portfolio" />
				<label for="portfolio">Personal Portfolio</label>
			</div>

            <div>
				<input type="radio" id="blog" name="website" value="blog" />
				<label for="blog">Blog Website</label>
			</div>
		</div>
		<!--  -->

		<!-- how many pages
		<div class="input">
			<label for="pages">How many pages?</label>
			<input type="number" name="pages" min="1" max="20" id="" />
		</div> -->

		<!-- what features need -->
		<div class="input">
			<label for="features">what features need?</label>
			<textarea name="features" maxlength="500" id="" cols="30" rows="10" />
		</div>

		<button type="submit">Send</button>
	</form>
	<p class="success">{form?.success || ''}</p>
</div>

<style>

</style>
