package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    //private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buySellTab;
    //header/div[@id='u_H']/div[1]/div[1]/ul[1]/li[1]/a

    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCarsTab;


    public void hoverBuySellTab() {
        mouseHoverToElement(buySellTab);
        log.info("MouseHover to buy+sell tab : " + buySellTab.toString());
    }
    public void clickSearchCars() {
        clickOnElement(searchCarsTab);
        log.info("Click to SearchCars : " + searchCarsTab.toString());
    }

}
