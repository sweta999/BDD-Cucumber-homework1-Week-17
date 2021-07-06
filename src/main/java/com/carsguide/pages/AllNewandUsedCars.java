package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AllNewandUsedCars extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(AllNewandUsedCars.class.getName());


    @FindBy(xpath = "//h1[@class = 'listing-search-title']")
    WebElement makeResult;

    public String getMakeResult() {
        log.info("Verify Text : " + makeResult.toString());
        return getTextFromElement(makeResult);
    }

}
