//#region summarizer
import { useState, useEffect, useRef } from "react";
import "./App.css";

const options = {
  sharedContext: "This is product reviews",
  type: "key-points",
  format: "plain-text",
  length: "short",
};

// Array of review data
const reviews = [
  {
    id: 1,
    datetime: "2024-12-14",
    text: "I recently purchased a set of kitchen utensils from this store, and I must say I’m thoroughly impressed. The quality of the materials is excellent, and they were packaged securely to avoid any damage during delivery. The utensils are incredibly durable.",
    email: "user1@example.com",
    status: "New",
  },
  {
    id: 2,
    datetime: "2024-12-14",
    text: "I purchased a decorative lamp from this store, and I am absolutely thrilled with my purchase. The design is exactly as shown in the photos, and the quality far exceeded my expectations. The lamp adds a warm, cozy ambiance to my living room and is the perfect focal point for the space. The materials used are sturdy, and the light is soft yet bright enough to illuminate the room without being harsh. The only thing I wish was different is that they included more detailed assembly instructions, as I struggled a bit to put it together. The process took longer than I had anticipated, but once it was assembled, it was completely worth it. Despite that minor issue, I am extremely satisfied with the product. I will definitely buy more items from this store in the future, as they offer such great value for money.",
    email: "user2@example.com",
    status: "New",
  },
  {
    id: 3,
    datetime: "2024-12-14",
    text: "I ordered a winter jacket, and it is perfect for the cold temperatures. The fabric is incredibly soft, and the fit is elegant and flattering. The jacket keeps me warm without being bulky, which is great for layering with sweaters. I’ve worn it on a few chilly mornings, and it provided excellent protection from the cold wind. The jacket has a stylish design, and I’ve received many compliments on it. The quality of the stitching and material is impressive, and I can tell it will last for many seasons. Unfortunately, the delivery took a bit longer than expected, but it was definitely worth the wait for such a high-quality product. The customer service team kept me updated throughout the process, which made me feel reassured. Overall, I am extremely satisfied with my purchase and would recommend this store for winter wear. I’ll definitely consider buying more outerwear from here in the future.",
    email: "user3@example.com",
    status: "New",
  },
  {
    id: 4,
    datetime: "2024-12-14",
    text: "I recently bought a pair of sports shoes, and they are simply fantastic. They fit perfectly and feel extremely comfortable, even on long runs. The cushioning is excellent, providing great support for my feet and knees. The shoes are lightweight, and I don’t feel weighed down during my runs. The design is modern and stylish, and they go well with both casual and athletic outfits. The price was also very reasonable for such high-quality shoes. However, the website could be a little more user-friendly. It took me some time to find the shoes I wanted because the product categories weren’t very clear. Additionally, I would appreciate a wider range of color options. Overall, I am happy with my purchase and would definitely buy from here again. These shoes have quickly become my go-to pair for exercise.",
    email: "user4@example.com",
    status: "New",
  },
  {
    id: 5,
    datetime: "2024-12-14",
    text: "I bought a phone cover from this store, and both the design and quality are outstanding. It turned out to be even better than I expected. The material feels premium, and the fit is perfect. It offers great protection for my phone without adding unnecessary bulk. The sleek design complements my phone’s aesthetics, and it has a textured surface that provides a secure grip, preventing accidental slips. The price was also reasonable, making it a great value for money. The only downside was that it took a little longer to arrive than anticipated. However, customer service kept me informed about the status of my order, and the delay wasn’t a huge issue in the end. I’m very satisfied with the product and the overall shopping experience. I’ll definitely continue to shop at this store for other phone accessories and tech gear.",
    email: "user6@example.com",
    status: "New",
  },
  {
    id: 6,
    datetime: "2024-12-14",
    text: "I bought an air fryer from this website, and I am extremely satisfied with it! The food it cooks is crispy and delicious, and the operation is simple and straightforward. I’ve been using it to prepare everything from French fries to chicken wings, and the results are consistently great. The air fryer heats up quickly and cooks food evenly, reducing the need for excessive oil and making my meals healthier. The price is also significantly cheaper than what I found in physical stores, which was a huge plus. The only minor issue was that the packaging was slightly damaged when it arrived, but fortunately, the product itself was unharmed and works perfectly. I’m very impressed with the quality of the product and would recommend this air fryer to anyone looking for a more convenient and healthier way to cook.",
    email: "user7@example.com",
    status: "New",
  },
  {
    id: 7,
    datetime: "2024-12-14",
    text: "I purchased a backpack from this store, and the experience was fantastic. The backpack is made from high-quality materials and has a very practical design. It fits all my essentials, and I love the number of compartments it has, making it easy to stay organized. The straps are adjustable and padded, providing excellent comfort even when carrying heavy loads. The backpack is versatile and can be used for work, school, or travel. The prices are reasonable compared to other stores, but I do wish they offered faster shipping options. It took a little longer than I expected, but the product quality made up for the wait. Overall, I’m very happy with my purchase and would definitely consider buying more from this store in the future, especially for travel gear.",
    email: "user8@example.com",
    status: "New",
  },
  {
    id: 8,
    datetime: "2024-12-14",
    text: "I bought a pair of headphones from this site, and the sound quality is incredible for the price. The noise-canceling feature works amazingly, providing a great listening experience even in noisy environments like cafes and public transportation. The bass is deep, and the treble is clear, making music sound vibrant and immersive. The headphones are comfortable to wear for extended periods, and the battery life is excellent, lasting for hours without needing a recharge. The packaging was neat and secure, ensuring no damage during shipping. The only downside was that the payment process was a bit confusing, and it took me a while to figure out how to complete the order. However, once I received the headphones, I was thrilled with the quality. I’m very happy with my purchase and will definitely return for more audio products in the future.",
    email: "user9@example.com",
    status: "New",
  },
  {
    id: 9,
    datetime: "2024-12-14",
    text: "I bought a jacket for outdoor activities, and it is absolutely perfect. It’s warm and lightweight, making it ideal for winter hikes and other outdoor adventures. The jacket is also breathable, which prevents me from overheating during intense physical activity like trekking up a mountain. The fabric is durable and water-resistant, keeping me comfortable even in light rain or snow. The jacket has several useful pockets, perfect for storing small items like keys or a phone. The prices at this store are very reasonable for the quality, and I believe I got great value for my money. My only suggestion would be to offer more size options, especially for those with a larger build. Otherwise, I’m very satisfied with my purchase and would recommend this store to anyone looking for high-quality outdoor gear at an affordable price.",
    email: "user10@example.com",
    status: "New",
  },
];

function Summarizer() {
  const [isLoading, setIsloading] = useState({});
  const summarizer = useRef(null);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const callAiModel = async () => {
      const AI = await ai.summarizer.create(options);
      summarizer.current = AI;
    };
    callAiModel();
  }, []);

  const handleSummarizer = async (review) => {
    try {
      setIsloading((prev) => ({ ...prev, [review.id]: true }));
      const result = await summarizer.current.summarize(review.text);
      setSummary((prev) => ({ ...prev, [review.id]: result }));
      setIsloading((prev) => ({ ...prev, [review.id]: false }));
    } catch (error) {
      setIsloading((prev) => ({ ...prev, [review.id]: false }));
      console.log(error);
    }
  };

  return (
    <>
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Datetime</th>
              <th>Review Text</th>
              <th>User Email</th>
              <th>Status</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td>{review.id}</td>
                <td>{review.datetime}</td>
                <td>{review.text}</td>
                <td>{review.email}</td>
                <td>{review.status}</td>
                <td style={{ maxWidth: "450px" }}>
                  <div className="actions">
                    {summary[review.id] ? (
                      <pre className="result">{summary[review.id]}</pre>
                    ) : (
                      <button
                        disabled={isLoading[review.id]}
                        onClick={() => handleSummarizer(review)}
                      >
                        {isLoading[review.id] ? "Loading..." : "Summarize"}
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Summarizer;
//#endregion
