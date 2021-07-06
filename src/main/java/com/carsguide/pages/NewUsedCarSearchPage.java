package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NewUsedCarSearchPage extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(NewUsedCarSearchPage.class.getName());

    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement verifyText;
    @FindBy(xpath = "//select[@id='makes']")
    WebElement selectMake;
    @FindBy(xpath = "//select[@id='models']")
    WebElement selectModel;
    @FindBy(xpath = "//select[@id='locations']")
    WebElement selectLocation;
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement selectPrice;
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCar;

    public String  setVerifyText() {
        log.info("Verify Text, New & Used Car Search : " + verifyText.toString());
        return getTextFromElement(verifyText);
    }
    public void setSelectMake(String make) {
        mouseHoverToElement(selectMake);
        selectByVisibleTextFromDropDown(selectMake,make);
        log.info("Select Make of the Car : " + selectMake.toString());
    }
    public void setSelectModel(String model) {
        mouseHoverToElement(selectModel);
        selectByVisibleTextFromDropDown(selectModel,model);
        log.info("Select Model of the Car : " + selectModel.toString());
    }
    public void setSelectLocation(String location) {
        mouseHoverToElement(selectLocation);
        selectByVisibleTextFromDropDown(selectLocation,location);
        log.info("Select Location  : " + selectLocation.toString());
    }
    public void setSelectPrice(String price) {
        mouseHoverToElement(selectPrice);
        selectByVisibleTextFromDropDown(selectPrice,price);
        log.info("Select Price(Max) : " + selectPrice.toString());
    }
    public void setFindMyNextCar() {
        clickOnElement(findMyNextCar);
        log.info("Click on, Find My Next Car button : " + findMyNextCar.toString());
    }




}
