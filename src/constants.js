export type Year = "2012" | "2013" | "2014" | "2015" | "2016" | "2017" | "2018";

export type Speaker = {
  id: string,
  name: string,
  twitter: string,
  bio: string,
  image: string,
  talkTopic: string,
  talkBlurb: string
};

export const speakers: Speakers = {
  "2012": {
    displayName: "2012",
    speakers: [
      {
        id: "aaa",
        name: "Speaker 2012 1",
        topic: "Topic 2012 1"
      },
      {
        id: "bbb",
        name: "Speaker 2012 2",
        topic: "Topic 2012 2"
      },
      {
        id: "ccc",
        name: "Speaker 2012 3",
        topic: "Topic 2012 3"
      }
    ]
  },
  "2013": {
    displayName: "2013",
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
        name: "Speaker 2013 3",
        topic: "Topic 2013 3"
      }
    ]
  },
  "2014": {},
  "2015": {},
  "2016": {},
  "2017": {},
  "2018": {
    displayName: "2018",
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
        name: "Speaker 2018 3",
        topic: "Topic 2018 3"
      }
    ]
  }
};

export const years: Year[] = Object.keys(speakers);
