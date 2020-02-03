import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
	const wrapper = shallowMount(App);

	const targetProduct = {
		name: "Target Product Name",
		images: [
			{
				href: "imageLink1"
			},
			{
				href: "imageLink2"
			}
		]
	}

	it('Displays Carousel overlay when invoked', () => {
		wrapper.vm.displayThumbnails(targetProduct);
		expect(wrapper.vm.showThumbnails).toBe(true);
	});

	it('Removes Carousel from the page when invoked', () => {
		wrapper.vm.removeCarousel();
		expect(wrapper.vm.productTitle).toBe("");
	});
})
