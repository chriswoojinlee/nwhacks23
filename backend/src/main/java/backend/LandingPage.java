package backend;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LandingPage {
    private String originCountry;
    private String destinationCountry;
    private String departureDate;

    public LandingPage(String originCountry, String destinationCountry, String departureDate) {
        this.originCountry = originCountry;
        this.destinationCountry = destinationCountry;
        this.departureDate = departureDate;
    }

    public String getOriginCountry() {
        return originCountry;
    }

    public String getDestinationCountry() {
        return destinationCountry;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setOriginCountry(String originCountry) {
        this.originCountry = originCountry;
    }

    public void setDestinationCountry(String destinationCountry) {
        this.destinationCountry = destinationCountry;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }
}
