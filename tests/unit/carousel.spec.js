import { shallowMount } from '@vue/test-utils'
import Carousel from '@/components/Carousel.vue'

describe('Carousel.vue', () => {
	const wrapper = shallowMount(Carousel, {
		propsData: {
			images: [
				{
					href: "imageLink1"
				},
				{
					href: "imageLink2"
				}
			]
		}
	});

	test("Carousel displays first image index when created", () => {
		expect(wrapper.vm.targetImage.href).toEqual("imageLink1");
	});

	it('Emits Close Out event', () => {
		wrapper.vm.closeOut();
		expect(wrapper.emitted("closeOut")).toBeTruthy();
	});

	it('switches to second image/index in carousel (last option)', () => {
		wrapper.vm.switchImage(1);
		expect(wrapper.vm.imageIndex).toBe(1);
	});

	it('switches to first image/index in carousel (first option)', () => {
		wrapper.vm.switchImage(1);
		expect(wrapper.vm.imageIndex).toBe(0);
	});

	it('switches to second image/index in carousel (second option)', () => {
		wrapper.vm.switchImage(-1);
		expect(wrapper.vm.imageIndex).toBe(1);
	});
})
