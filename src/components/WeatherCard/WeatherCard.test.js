import {
  act,
  cleanup,
  render,
  waitForElement,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import axios from "axios";
import React from "react";
import WeatherCard from "./WeatherCard";

const mockWeatherData = [
  {
    name: "NY",
    main: {
      temp: 7,
    },
    weather: [{ main: "drizzle", icon: "icon" }],
  },
];

beforeEach(() => {
  axios.get = jest.fn(() =>
    Promise.resolve({ data: { list: mockWeatherData } })
  );
});

afterEach(cleanup);

describe("<WeatherCard/>", () => {
  it("displays text 'loading weather' while fetching data", async () => {
    await act(async () => {
      const { getByText } = render(<WeatherCard />);

      const loadingMsg = getByText("Loading weather...");
      expect(loadingMsg).toBeInTheDocument();
    });
  });

  it("removes text 'loading weather' after displaying gifs", async () => {
    const { getByText } = render(<WeatherCard />);

    await waitForElementToBeRemoved(() => getByText("Loading weather..."));
  });

  it("displays the weather received from Weather API", async () => {
    const { getByText } = render(<WeatherCard />);

    await waitForElement(() => getByText(mockWeatherData[0].name));
    const status = getByText(mockWeatherData[0].weather[0].main);

    expect(status).toBeInTheDocument();
  });
});
