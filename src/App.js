import PillButton from "./components/pill_button";
import "./Pill.css";
import { useState } from "react";
import TopHashTags from "./components/categories/top_hashtags";
import TopEntities from "./components/categories/top_entities";
import SentimentTrend from "./components/categories/sentiment_trend";
import AspectSentiment from "./components/categories/aspect_sentiment";
import PostInsights from "./components/categories/post_insights";
import SentimentByCategory from "./components/categories/sentiment_by_category";
import Engagements from "./components/categories/engagements";

function App() {
  const [selectedPills, setSelectedPills] = useState(["Top Hashtags"]);

  const PillsTextList = [
    "Top Hashtags",
    "Top Entities",
    "Sentiment Trend",
    "Aspect Sentiment",
    "Post Insights",
    "Sentiment By Category",
    "Engagements",
  ];

  const SelectOrUnselectPills = (item) => {
    const selectedItems = [...selectedPills];

    if (isSelected(item)) {
      if (selectedPills.length == 1) return;
      const filter = selectedItems.filter((value) => value !== item);
      setSelectedPills(filter);
      return;
    }

    selectedItems.push(item);

    setSelectedPills(selectedItems);
  };

  const isSelected = (item) => selectedPills.includes(item);

  console.log(selectedPills);

  return (
    <div className="pill_container">
      <div className="pill_buttons">
        {PillsTextList.map((text, index) => (
          <PillButton
            key={index}
            isActive={isSelected(text)}
            onSelect={() => {
              SelectOrUnselectPills(text);
            }}
          >
            {text}
          </PillButton>
        ))}
      </div>

      <div className="dynamic_contents">
        {selectedPills.length == 0 ? "No data yet" : ""}
        {isSelected("Top Hashtags") ? <TopHashTags /> : ""}
        {isSelected("Top Entities") ? <TopEntities /> : ""}
        {isSelected("Sentiment Trend") ? <SentimentTrend /> : ""}
        {isSelected("Aspect Sentiment") ? <AspectSentiment /> : ""}
        {isSelected("Post Insights") ? <PostInsights /> : ""}
        {isSelected("Sentiment By Category") ? <SentimentByCategory /> : ""}
        {isSelected("Engagements") ? <Engagements /> : ""}
      </div>
    </div>
  );
}

// Remove select all
// User cannot deselect all at least one selection should be selected

export default App;
