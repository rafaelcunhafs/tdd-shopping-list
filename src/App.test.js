import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("Shopping List Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render the title of form list", () => {
    expect(wrapper.find("h1").text()).toContain("Lista de compras");
  });

  test("render a button with text of `Comprar`", () => {
    expect(wrapper.find("#tdd-btn").text()).toBe("Comprar");
  });

  test("render the initial value of input", () => {
    expect(wrapper.find("#tdd-input").text()).toBe("");
  });

  test("if input has no text don't create item", () => {
    wrapper.find("#tdd-input").simulate("change", { target: { value: '' } });
    wrapper.find("#tdd-btn").simulate("click");
    expect(wrapper.find('.tdd-item-row')).toHaveLength(0);
  });

  test("clear input after click button", () => {
    wrapper.find("#tdd-input").simulate("change", { target: { value: 'Biscoito' } });
    wrapper.find("#tdd-btn").simulate("click");
    expect(wrapper.find("#tdd-input").text()).toBe("");
  });

  test("created item must contain the same text typed", () => {
    wrapper.find("#tdd-input").simulate("change", { target: { value: 'Biscoito' } });
    wrapper.find("#tdd-btn").simulate("click");
    expect(wrapper.find('.tdd-item-row').text()).toBe('Biscoito');
  });

  test("create one item on list", () => {
    wrapper.find("#tdd-input").simulate("change", { target: { value: 'Biscoito' } });
    wrapper.find("#tdd-btn").simulate("click");
    expect(wrapper.find('.tdd-item-row')).toHaveLength(1);
  });

  test("creating two items on list", () => {
    wrapper.find("#tdd-input").simulate("change", { target: { value: 'Biscoito' } });
    wrapper.find("#tdd-btn").simulate("click");
    wrapper.find("#tdd-input").simulate("change", { target: { value: 'Leite' } });
    wrapper.find("#tdd-btn").simulate("click");
    expect(wrapper.find('.tdd-item-row')).toHaveLength(2);
  });

  test("purchased item must disappear buy button", () => {
    wrapper.find("#tdd-input").simulate("change", { target: { value: 'Biscoito' } });
    wrapper.find("#tdd-btn").simulate("click");
    wrapper.find(".tdd-buy").first().simulate("click");
    expect(wrapper.find('.tdd-item-row').first().hasClass('complete')).toEqual(true);
  });

  test("buying an item should disappear only the buy button of the purchased item", () => {
    wrapper.find("#tdd-input").simulate("change", { target: { value: 'Biscoito' } });
    wrapper.find("#tdd-btn").simulate("click");
    wrapper.find("#tdd-input").simulate("change", { target: { value: 'Leite' } });
    wrapper.find("#tdd-btn").simulate("click");

    wrapper.find(".tdd-buy").last().simulate("click");
    expect(wrapper.find('.tdd-item-row').first().hasClass('complete')).toEqual(false);
    expect(wrapper.find('.tdd-item-row').last().hasClass('complete')).toEqual(true);
  });
});