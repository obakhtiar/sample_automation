import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import Xrayhelper from "../../helper/xray_helper";
import Api_helper from "../../helper/api_helper";
import path from "path";
import logger from "../../helper/logger";

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given("I have read the api endpoint", async function () {
  await Api_helper.getRequest();
  const filepath = path.join(
    __dirname,
    "..",
    "/../",
    "resources",
    "xraytoken.json"
  );
  logger.info("seeting up the path");
  await Xrayhelper.postRequest(filepath, "token")
});
