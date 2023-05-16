import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils"
import AppButton from "@/components/app/AppButton.vue";

const buttonText = 'Submit';
const buttonComponent = shallowMount(AppButton, {
	slots: {
		default: buttonText,
	}
})

describe("AppButton", () => {
	
	it("renders button", () => {
		expect(buttonComponent).toBeTruthy();
	});
	
	it("renders button with correct text", () => {
		expect(buttonComponent.text()).toContain(buttonText)
	});
	
	it("runs function upon click", () => {
		//
	});
	it("renders button as a link", () => {
		//
	});
	it("renders button on loading state", () => {
		//
	});
})