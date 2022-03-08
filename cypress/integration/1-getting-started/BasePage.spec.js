/// <reference types="cypress" />

import Base_Page from  "../PageObject/Base_Page";

const base_url="http://localhost:3000/"

describe("Base blogpage", () => {
    it("Basepage", () => {
      const bpage = new BasePage();
      bpage.navigate();
    })
})
