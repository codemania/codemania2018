export type Year = "2012" | "2013" | "2014" | "2015" | "2016" | "2017" | "2018";

export const speakers: Speakers = {
  "2012": {
    speakers: [
      {
        name: "Speaker 2012 1",
        topic: "Topic 2012 1"
      },
      {
        name: "Speaker 2012 2",
        topic: "Topic 2012 2"
      },
      {
        name: "Speaker 2012 2",
        topic: "Topic 2012 2"
      }
    ]
  },
  "2013": {
    speakers: [
      {
        name: "Speaker 2013 1",
        topic: "Topic 2013 1"
      },
      {
        name: "Speaker 2013 2",
        topic: "Topic 2013 2"
      },
      {
        name: "Speaker 2013 2",
        topic: "Topic 2013 2"
      }
    ]
  },
  "2014": {},
  "2015": {},
  "2016": {},
  "2017": {},
  "2018": {
    speakers: [
      {
        name: "Speaker 2018 1",
        topic: "Topic 2018 1"
      },
      {
        name: "Speaker 2018 2",
        topic: "Topic 2018 2"
      },
      {
        name: "Speaker 2018 2",
        topic: "Topic 2018 2"
      }
    ]
  }
};

export const years: Year[] = Object.keys(speakers);
