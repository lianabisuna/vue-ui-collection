import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils"
import AppButton from "@/components/app/AppButton.vue";

describe("AppButton", () => {
	it("renders a button element", () => {
		const wrapper = mount(AppButton);
		const button = wrapper.find('button');
		expect(button.exists()).toBeTruthy();
	});

	it("renders a button element with types button, submit and reset", () => {
		const buttonTypes = ['button', 'submit', 'reset'];
		buttonTypes.forEach((buttonType) => {
			const wrapper = mount(AppButton, {
				props: { type: buttonType },
			});
			const button = wrapper.find('button');
			expect(button.attributes('type')).toMatch(buttonType);
		})
	});

	it("renders a button element in disabled state", () => {
		const wrapper = mount(AppButton, {
			props: { disabled: true },
		});
		const button = wrapper.find('button');
		expect(button.element).toHaveProperty('disabled');
	});
	
	it("renders a button text using default slot", () => {
		const buttonText = 'Test';
		const wrapper = mount(AppButton, {
			slots: { default: buttonText },
		});
		const button = wrapper.find('button');
		expect(button.text()).toContain(buttonText);
	});

	// RESEARCH: router-link doesn't render <a>
	it("renders a router-link", () => {
		const linkVal = '/form';
		const wrapper = mount(AppButton, {
			props: { to: linkVal },
		});;
		expect(wrapper.attributes('to')).toMatch(linkVal);
	});
	
	it("triggers a click event ", () => {
		const wrapper = mount(AppButton);
		wrapper.find('button').trigger('click');
		expect(wrapper.emitted().click).toBeTruthy();
	});

	// TO DO: renders as an anchor element with href attribute
	// TO DO: renders loading state
})