import { shallowMount } from '@vue/test-utils';
import Product from '@/components/Product.vue'

describe('Product.vue', () => {
	const wrapper = shallowMount(Product, {
		propsData: {
			product: {
				name: "Target Product Name",
				hero: {
					href: "Product Hero Href"
				},
				links: {
					www: "Product www link"
				},
				priceRange: {
					selling: {
						high: 25,
						low: 20
					}
				}
			}
		}
	});

	it('Emits Display Thumbnails event', () => {
		wrapper.vm.displayThumbnails();
		expect(wrapper.emitted("displayThumbnails")).toBeTruthy();
	});
});
