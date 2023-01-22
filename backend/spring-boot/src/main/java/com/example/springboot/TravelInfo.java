package com.example.springboot;


import com.gargoylesoftware.htmlunit.*;
import com.gargoylesoftware.htmlunit.html.*;
import java.io.IOException;
import java.util.List;

public record TravelInfo(String country) {
    public Object getTravelInfo() {
        return webScrapeGovWebsite();
    }

    public TravelInfoDTO webScrapeGovWebsite() {
        WebClient webClient = new WebClient(BrowserVersion.CHROME);
        // Ignores common webClient errors
        webClient.getOptions().setCssEnabled(false);
        webClient.getOptions().setThrowExceptionOnFailingStatusCode(false);
        webClient.getOptions().setThrowExceptionOnScriptError(false);
        webClient.getOptions().setPrintContentOnFailingStatusCode(false);
        webClient.getOptions().setCssEnabled(false);
        webClient.getOptions().setJavaScriptEnabled(false);

        try {
            HtmlPage page = webClient.getPage(String.format("https://travel.gc.ca/destinations/%s", country));

            webClient.getCurrentWindow().getJobManager().removeAllJobs();
            webClient.close();
            
            HtmlElement passport = (HtmlElement) page.getByXPath("//div[@id='entryexit']").get(0);
            HtmlElement riskLevel = (HtmlElement) page.getByXPath("//div[@class='advisories report-status-0' or @class='advisories report-status-1' or @class='advisories report-status-2']").get(0);

            return new TravelInfoDTO(passport.asXml(), riskLevel.asXml());

        } catch (IOException e) {
            System.out.println("An error occurred: " + e);
        }

        return null;
    }
}