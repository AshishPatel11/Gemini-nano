import "./App.css";
// Array of review data
const reviews = [
    {
        id: 1,
        datetime: "2024-12-14",
        text: "I recently purchased a set of kitchen utensils from this store, and I must say I’m thoroughly impressed. The quality of the materials is excellent, and they were packaged securely. The delivery was a day late, but the customer service team was very responsive and helpful in tracking my order. I’ll definitely shop here again!",
        email: "user1@example.com",
        status: "New",
    },
    {
        id: 2,
        datetime: "2024-12-14",
        text: "Compré una lámpara decorativa en esta tienda, y estoy encantado con mi compra. El diseño es exactamente como en las fotos, y la calidad superó mis expectativas. Lo único que me hubiera gustado es que incluyeran instrucciones más detalladas para el ensamblaje. ¡Sin duda compraré más productos aquí!",
        email: "user2@example.com",
        status: "New",
    },
    {
        id: 3,
        datetime: "2024-12-14",
        text: "J'ai commandé une veste d’hiver, et elle est parfaite pour les températures froides. Le tissu est très doux et la coupe est élégante. Malheureusement, la livraison a pris un peu plus de temps que prévu, mais cela vaut vraiment la peine d’attendre pour un produit de cette qualité.",
        email: "user3@example.com",
        status: "New",
    },
    {
        id: 4,
        datetime: "2024-12-14",
        text: "Ich habe kürzlich ein paar Sportschuhe gekauft, und sie sind einfach fantastisch. Sie passen perfekt und fühlen sich sehr bequem an, sogar bei langen Läufen. Der Preis war auch angemessen. Allerdings könnte die Website noch etwas übersichtlicher gestaltet werden, um die Suche nach Produkten zu erleichtern.",
        email: "user4@example.com",
        status: "New",
    },
    {
        id: 5,
        datetime: "2024-12-14",
        text: "मैंने इस स्टोर से एक फोन कवर खरीदा और इसका डिज़ाइन और गुणवत्ता दोनों ही शानदार हैं। यह मेरी उम्मीदों से भी बेहतर निकला। कीमत भी वाजिब थी। केवल एक समस्या यह थी कि इसे पहुंचने में थोड़ा अधिक समय लग गया, लेकिन कुल मिलाकर खरीदारी का अनुभव अच्छा रहा।",
        email: "user6@example.com",
        status: "New",
    },
    {
        id: 6,
        datetime: "2024-12-14",
        text: "我从这个网站买了一台空气炸锅，使用后非常满意！炸出来的食物又香又脆，而且操作简单。价格也比实体店便宜很多。唯一的小问题是包装稍微有些破损，但产品本身没有受到影响。",
        email: "user7@example.com",
        status: "New",
    },
    {
        id: 7,
        datetime: "2024-12-14",
        text: "اشتريت حقيبة ظهر من هذا المتجر وكانت تجربة رائعة. الحقيبة مصنوعة من مواد عالية الجودة ولها تصميم عملي جدًا. الأسعار معقولة مقارنة بالمتاجر الأخرى، لكن كنت أتمنى خيارات شحن أسرع.",
        email: "user8@example.com",
        status: "New",
    },
    {
        id: 8,
        datetime: "2024-12-14",
        text: "このサイトで購入したイヤホンは音質がとても良く、値段もお手頃でした。特にノイズキャンセリング機能が素晴らしいです。梱包も丁寧でしたが、支払い時に少し操作が分かりにくかったです。",
        email: "user9@example.com",
        status: "New",
    },
    {
        id: 9,
        datetime: "2024-12-14",
        text: "Я купил куртку для активного отдыха, и она просто идеальна. Очень теплая и легкая, как раз для зимних походов. Цены в этом магазине приятно удивляют. Единственное, хотелось бы больше вариантов выбора размера.",
        email: "user10@example.com",
        status: "New",
    },
];

function App() {
    const handleSummarizer = async () => {
        try {
            const summarizer = await ai.summarizer.create();

            const result = await Promise.all(
                reviews.map(async (review) => {
                    return await summarizer.summarize(review.text);
                })
            );
            console.log({ result });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="App">
            <button onClick={() => handleSummarizer()}>Summarize</button>
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
                            <td>
                                <div className="actions"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
