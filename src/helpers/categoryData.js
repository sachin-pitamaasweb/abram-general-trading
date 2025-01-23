// src/helpers/categoryData.js

const categoryData = {
    Pulses: {
        title: "Pulses",
        description: "Explore our premium selection of pulses, carefully sourced and processed to retain their authentic flavors and nutritional value. Ideal for wholesome meals, our pulses are packed with essential nutrients and superior taste.",
        quality: `Our pulses are carefully handpicked from trusted farms, ensuring minimal processing while preserving their natural taste, vibrant color, and nutrient density. Each batch undergoes rigorous quality checks to ensure purity, taste, and nutritional value.`,
        items: {
            ChickPeas: {
                title: "Chickpeas – Protein-Packed and Farm Fresh",
                description: `
                Discover the goodness of our premium chickpeas, sourced directly from top-quality farms.
                Carefully harvested and processed to preserve their natural taste and nutritional value, 
                our chickpeas are perfect for creating delicious dishes such as creamy hummus, flavorful chana masala,
                protein-rich salads, and healthy roasted snacks. Add a wholesome touch to your meals with these nutrient-packed legumes.
                `,
                quality: `
                Our chickpeas are naturally rich in plant-based protein and fiber, making them an ideal choice for a balanced and healthy diet. 
                They undergo rigorous cleaning and quality checks to ensure only the best grains make it to your kitchen. 
                Completely free from additives and preservatives, our chickpeas offer purity and freshness in every bite..
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735907233/chickpea-photo-1_i90txx.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735907233/chickpeas_zg17bi.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737548324/freepicdownloader.com_-dry-chickpeas-clay-bowl-isolated-white-background-uncooked-chick-pea-chickpea-grains-normal_xq3cdd.jpg"
                ],
            },
            ChanaDal: {
                title: "Chana Dal – Authentic Taste for Traditional Recipes",
                description: `
                 Sourced from trusted farms, our Chana Dal offers a rich taste and vibrant yellow color, 
                 perfect for a variety of Indian dishes like dal tadka, chana dal fry, vadas, and savory pancakes. 
                 Its earthy flavor and creamy texture make it a versatile ingredient for your kitchen, loved by all ages.
                `,
                quality: `
                Rich in protein and fiber, our Chana Dal is ideal for maintaining a balanced and healthy diet. 
                It undergoes a rigorous cleaning and quality-checking process to ensure the finest grains reach your table. 
                Free from additives and preservatives, our Chana Dal delivers purity, freshness, and nutritional value in every bite.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735971810/ChanaDalSplit_wtggnn.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735971952/HAR-2_eiproo.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735971810/Chana-dal-1-1080x720_h9yqwf.jpg"
                ]
            },
            Rajma: {
                title: "Rajma – Premium Kidney Beans for Authentic Indian Curries",
                description: `
                 Our Rajma beans are known for their rich texture, bold taste, and vibrant red color, 
                 making them the perfect choice for classic Indian curries like Rajma Masala. 
                 Loved for their ability to soak in spices and flavors, these kidney beans are a must-have for hearty, satisfying meals. 
                 Whether paired with steamed rice or enjoyed in global recipes like chili, our Rajma delivers authentic taste in every bite.
                `,
                quality: `
                   Carefully sourced from trusted farms, our Rajma is packed with essential nutrients like iron, fiber, and protein. 
                   These kidney beans are cleaned and processed naturally to retain their natural goodness, 
                   ensuring they cook to a soft, creamy consistency while maintaining their vibrant color and rich flavor. 
                   Completely free from preservatives and additives, our Rajma is perfect for creating wholesome, delicious meals.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735972251/Red-Kidney-Beans_eruo31.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735972250/rajma-dal-500x500-1_j6lwbb.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735972249/bhaderwah-marwah-rajma-red-kidney-beans-pack-400-gm-pulses-442_lxnqyi.jpg"
                ]
            },
            ToorDal: {
                title: "Toor Dal – Premium Farm Fresh Lentils for Wholesome Indian Meals",
                description: `
                    Our Toor Dal is celebrated for its rich, earthy flavor and versatility in traditional Indian cooking. 
                    Ideal for dishes like dal fry, sambhar, and more, these lentils absorb spices beautifully to create a hearty, comforting meal. 
                    Packed with protein and essential nutrients, Toor Dal provides a nutritious base for your favorite recipes. 
                    Whether served with rice or used in soups and stews, Toor Dal offers a fulfilling taste of authentic Indian cuisine in every bite.
                `,
                quality: `
                    Sourced from trusted farms, our Toor Dal is naturally rich in protein, fiber, and essential vitamins. 
                    Carefully processed to preserve its natural flavor and nutritional value, this lentil is perfect for a wide range of wholesome meals. 
                    Known for its smooth texture when cooked, Toor Dal ensures your dishes are both tasty and nutritious. 
                    Free from preservatives and additives, our Toor Dal brings the best of farm-fresh goodness to your kitchen.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735972484/113360600_viuoes.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735972489/toor-dal-min-scaled-740285_l_ijoytk.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735972490/image-88_m0n2eu.png"
                ]
            },
            UradDal: {
                title: "Urad Dal – Premium Lentils for Soft Idlis, Crispy Dosas, and Delicious Vadas",
                description: `
                    Our Urad Dal is the perfect choice for making soft, fluffy idlis, crispy dosas, and delicious vadas, 
                    all staples of South Indian cuisine. Naturally packed with protein, fiber, and essential nutrients, 
                    it provides the foundation for wholesome, authentic dishes. Rich in texture and flavor, our Urad Dal is ideal for grinding into smooth batters, 
                    ensuring your favorite dishes are always perfect. Whether you're preparing a traditional breakfast or crafting a savory snack, 
                    our Urad Dal delivers superior quality and taste.
                `,
                quality: `
                    Sourced from trusted farms, our Urad Dal is carefully cleaned and minimally processed to retain its natural taste, 
                    making it ideal for creating light, airy batters for idlis and dosas. Packed with plant-based protein, fiber, and essential vitamins, 
                    this dal is a nutritious addition to your diet. It’s free from preservatives and additives, allowing you to enjoy it in its purest form. 
                    The perfect ingredient for your South Indian recipes, our Urad Dal guarantees superior quality and freshness, whether you’re cooking for family or guests.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735972755/sabuturad-2_kc1cra.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735972755/BlackuraddalWithHusk_47b8fbaa-c3f2-45ca-acc2-73cdd1c2e291_ksj6dx.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735972755/ev5q012g_sabut-urad-dal-or-whole-black-gram_625x300_06_September_23_x0ybop.webp"
                ]
            },
            MasoorDal: {
                title: "Masoor Dal – Premium Red Lentils for Nutritious Soups, Dals, and Stews",
                description: `
                   Our Masoor Dal is the perfect choice for quick and nutritious meals. Known for its fast cooking time and rich, earthy flavor, 
                   this red lentil is ideal for soups, dals, and stews. Packed with protein, iron, and essential nutrients, Masoor Dal offers a healthy 
                   and delicious base for a variety of meals. Whether you're preparing a hearty dal or a flavorful soup, our Masoor Dal provides 
                   the nourishment and taste you need for a balanced diet.
                `,
                quality: `
                   Sourced from organic farms, our Masoor Dal is naturally rich in protein, iron, and fiber, making it a great choice for those 
                   looking to maintain a healthy and balanced diet. Carefully cleaned and minimally processed, it retains its natural taste and 
                   nutrients while offering a quick cooking time. Free from additives and preservatives, this Masoor Dal ensures a wholesome 
                   and nutritious addition to your daily meals. It’s the perfect ingredient for creating delicious and health-packed dishes in no time.
                   `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735973087/2_xhl3lm.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735973086/masoordalhdimage_iapeee.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735973085/MO-Pulses-_-Beans_1_gwbijj.webp"
                ]
            },
            MoongDal: {
                title: "Moong Dal – Light, Nutritious, and Easily Digestible Lentils",
                description: `
                    Our premium Moong Dal is a perfect addition to your pantry for creating light and healthy meals. These versatile lentils 
                    are ideal for preparing khichdi, dal tadka, moong dal soup, and even innovative dishes like moong dal pancakes and 
                    dosas. Known for their mild flavor and soft texture, Moong Dal is a favorite in households worldwide. Its rich protein 
                    and fiber content make it a nutritious choice for everyone, including children, elders, and those on a health-conscious 
                    diet.
                    
                    Whether you want to create a hearty soup, a comforting khichdi, or an energizing breakfast, Moong Dal offers endless 
                    culinary possibilities. Its quick-cooking nature makes it convenient for busy days, and its high nutritional value 
                    supports overall wellness. With its natural yellow hue and wholesome goodness, Moong Dal is a staple ingredient for 
                    balanced and flavorful meals.
                `,
                quality: `
                    Our Moong Dal is sourced from trusted farms and processed with the utmost care to retain its natural taste, texture, 
                    and nutritional benefits. Rich in essential nutrients like protein, potassium, magnesium, and vitamins, it is a 
                    superfood that supports digestion, boosts immunity, and promotes heart health. Moong Dal is free from harmful 
                    chemicals, additives, and preservatives, ensuring that you receive only the purest and healthiest lentils.
            
                    These lentils are easy to cook and highly versatile, making them suitable for a variety of traditional and modern 
                    recipes. Packed with high-quality protein and low on calories, Moong Dal is an excellent choice for those looking 
                    to maintain a balanced diet, manage weight, or follow a vegetarian or vegan lifestyle. 
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735973390/green-mung-dal_ztbqug.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735973389/images_ajj2py.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735973388/71k9lpWPqGL_bwbt2t.jpg"
                ]
            },
        }
    },
    Rice: {
        title: "Rice",
        description: "Experience the authentic flavor of rice, carefully processed for quality and taste.",
        quality: `Our rice varieties are sourced from top-quality farms, processed with care to retain aroma and taste.`,
        items: {
            "1121 Steam Basmati": {
                title: "1121 Steam Basmati Rice – Premium Long-Grain Rice for Fluffy and Aromatic Meals",
                description: `
                    Elevate your dining experience with our 1121 Steam Basmati Rice, renowned for its extra-long, slender grains and unmatched aroma. 
                    Ideal for preparing biryanis, pulao, fried rice, or simple steamed rice, this premium basmati variety ensures a luxurious 
                    texture and rich flavor in every bite. Perfect for special occasions or daily meals, 1121 Steam Basmati Rice is a staple 
                    in kitchens that value taste and quality.
                    
                    With its natural fragrance and fluffy, non-sticky grains, this rice transforms ordinary dishes into gourmet creations. Whether 
                    paired with curries, grilled meats, or vegetarian delicacies, its consistent quality and exotic appeal make it a versatile 
                    choice for every culinary need. Easy to cook and light to digest, this basmati variety is a must-have for rice lovers.
                `,
                quality: `
                    Our 1121 Steam Basmati Rice is carefully sourced from premium paddy fields and processed using advanced steaming techniques 
                    to retain its natural aroma and nutrients. Known for its long grain and superior quality, this rice undergoes stringent quality 
                    checks to ensure purity and consistency.
                    
                    Free from chemicals and additives, our basmati rice is a healthy choice that retains its natural goodness. Its low glycemic 
                    index and rich carbohydrate profile make it ideal for energy-boosting meals while supporting balanced diets. Suitable for 
                    vegetarians and gluten-free diets, this rice offers wholesome nutrition for every family member.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735986724/1121-Steam-Rice_qw1tb1.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735986756/16963308913438_hdcovw.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735986756/images_1_fokgsh.jpg"
                ]
            },
            "1121 Sella Basmati": {
                title: "1121 Sella Basmati Rice – Premium Quality for Fluffy and Aromatic Dishes",
                description: `
                    Experience the excellence of 1121 Sella Basmati Rice, the perfect choice for creating exquisite meals with unmatched aroma, 
                    flavor, and texture. Known for its long, golden grains and unique parboiled process, this rice delivers a luxurious dining 
                    experience whether used in biryanis, pulao, or festive preparations. Its firm texture and fluffy grains make it ideal for 
                    recipes where presentation matters as much as taste.
                    
                    With its signature aroma and naturally aged grains, 1121 Sella Basmati elevates every meal, making it a favorite among chefs 
                    and households alike. Perfectly versatile, it pairs well with both vegetarian and non-vegetarian dishes, providing a gourmet 
                    touch to every plate.
                `,
                quality: `
                    Our 1121 Sella Basmati Rice undergoes a meticulous parboiling process to retain nutrients while enhancing its signature 
                    golden hue and aroma. Carefully sourced and aged for optimal flavor, this rice offers consistent cooking results with non-sticky, 
                    firm grains.
                    
                    Free from artificial additives and enriched with natural nutrients, 1121 Sella Basmati is a healthy and wholesome choice. 
                    Its low glycemic index supports a balanced diet, making it suitable for health-conscious consumers. Enjoy the authentic taste 
                    and texture of premium basmati rice in every meal.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735986943/1121-Sella-Rice_eroodq.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735986962/1121-sella-basmati_kc8dk8.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735986962/1121-sella-basmati-rice_htjvba.jpg"
                ]
            },
            "1121 Golden Sella": {
                title: "1121 Golden Sella Basmati Rice – Rich in Flavor and Aroma",
                description: `
        Discover the richness of 1121 Golden Sella Basmati Rice, known for its naturally golden hue, aromatic grains, 
        and fluffy texture. Perfect for biryani, pulao, and festive dishes, this rice adds a touch of elegance and 
        sophistication to every meal. Its long, slender grains remain firm and separate after cooking, making it the 
        top choice for culinary experts and home cooks alike.
        
        Whether you're preparing a lavish dinner for guests or a simple family meal, 1121 Golden Sella Basmati ensures 
        consistent quality and superior taste. Naturally aged for enhanced aroma and flavor, this rice guarantees 
        a gourmet dining experience.
    `,
                quality: `
        Our 1121 Golden Sella Basmati Rice undergoes a meticulous parboiling process, giving it its signature golden color 
        and nutrient-rich profile. Carefully sourced and aged for perfection, this rice is free from artificial additives, 
        ensuring purity and quality in every grain.
        
        Its low glycemic index and rich nutritional value make it a healthy choice for balanced meals. Ideal for festive 
        recipes and everyday cooking, 1121 Golden Sella Basmati delivers a luxurious texture and delightful aroma with every serving.
    `,

                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735987094/1121-golden-sella-basmati-rice-1709377830-7320134_pyddy9.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735987088/1121-Golden-Sella-Basmati-Rice_ievrgr.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735987088/1121-Golden-Sella_jpjlbk.jpg"
                ]
            },
            "1509 Steam Basmati": {
                title: "1509 Steam Basmati Rice – Long Grains with Superior Aroma",
                description: `
                    Elevate your dining experience with 1509 Steam Basmati Rice, renowned for its extra-long grains, delicate aroma, 
                    and fluffy texture. Perfect for daily meals and special dishes like biryani and fried rice, this rice is a 
                    preferred choice for those seeking premium quality and a delightful taste.
                    
                    With its exceptional cooking quality, 1509 Steam Basmati ensures that every grain stays separate, firm, and flavorful. 
                    Ideal for home cooks and chefs alike, it adds a touch of elegance to any meal, making it the centerpiece of your culinary creations.
                `,
                quality: `
                    Sourced from the finest basmati fields, our 1509 Steam Basmati Rice undergoes a meticulous steaming process, 
                    preserving its natural nutrients, aroma, and taste. The grains are naturally aged to enhance their flavor profile, 
                    ensuring consistent quality with every batch.
                    
                    This rice is free from artificial additives and is low in fat, making it a healthy choice for balanced meals. 
                    Its quick cooking time and superior grain integrity make it versatile for a wide range of recipes, from everyday dishes to festive feasts.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737547146/top-view-raw-rice-inside-brown-plate-dark-surface-meal-food-rice-raw_pvfqb6.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735987719/1509-Steam-Rice_toyaqe.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735987718/1509-steam-basmati-rice-500x500_etnw1m.webp"
                ]

            },
            "1509 Sella Basmati": {
                title: "1509 Sella Basmati Rice – Golden Grains for Gourmet Cooking",
                description: `
                    Experience the richness of 1509 Sella Basmati Rice, celebrated for its golden grains, superior aroma, 
                    and unmatched cooking quality. Perfect for special occasions, this rice enhances the flavors of biryani, 
                    pulao, and a variety of traditional and modern recipes.
                    
                    With its excellent grain length and natural aging process, 1509 Sella Basmati stands out for its ability 
                    to absorb flavors and deliver a fluffy, non-sticky texture. Whether you're cooking a festive meal or 
                    a quick dinner, this rice ensures a delightful culinary experience every time.
                `,
                quality: `
                    Carefully sourced from the best basmati fields, our 1509 Sella Basmati Rice undergoes a unique parboiling 
                    process that locks in nutrients and gives it a distinctive golden hue. Each grain is aged for optimal flavor 
                    and aroma, ensuring high-quality standards in every serving.
                    
                    This rice is naturally gluten-free, low in fat, and free from artificial additives, making it a healthy choice 
                    for all age groups. Its versatility makes it ideal for professional chefs and home cooks alike.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988216/1509-Sella-Basmati-Rice_wtvpo4.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988216/1509-white-sella-basmati-rice-1708933500-7310929_kggkmx.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988226/p2-1024x962_hkhlvi.png"
                ]
            },
            "1509 Golden Sella": {
                title: "1509 Golden Sella Basmati Rice – Premium Choice for Culinary Perfection",
                description: `
                    Discover the exquisite quality of 1509 Golden Sella Basmati Rice, renowned for its rich golden hue, 
                    long grains, and delightful aroma. Perfect for preparing biryani, fried rice, pulao, or any traditional 
                    delicacy, this rice ensures a flavorful and aromatic dining experience.
                    
                    Its exceptional grain length and fluffy texture make it the go-to choice for professional chefs and 
                    home cooks alike. Whether for daily meals or special occasions, 1509 Golden Sella Basmati Rice adds 
                    a luxurious touch to your table.
                `,
                quality: `
                    Sourced from the finest basmati fields, our 1509 Golden Sella Rice is processed using advanced techniques 
                    that retain its nutrients and enhance its natural golden color. Every grain is aged to perfection, ensuring 
                    superior taste, aroma, and texture.
                    
                    Naturally gluten-free and free from preservatives, this rice is a healthy choice for the whole family. 
                    Its versatility and ability to absorb flavors make it ideal for a variety of recipes, from traditional 
                    Indian dishes to international cuisines.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737547146/top-view-raw-rice-inside-brown-plate-dark-surface-meal-food-rice-raw_pvfqb6.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737547513/freepicdownloader.com_-rice-groats-wooden-spoon-stone-background-healthy-food-normal_dmvmuu.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988440/1509-golden-sella-basmati-rice_ukznnu.jpg"
                ]
            },
            "1401 Steam Basmati": {
                title: "1401 Steam Basmati Rice – Perfect Balance of Aroma and Fluffiness",
                description: `
                    1401 Steam Basmati Rice is a premium choice for those who appreciate authentic basmati flavor. 
                    With its extra-long grains, exquisite aroma, and soft, fluffy texture, it is ideal for a variety 
                    of dishes, including biryani, pilaf, and fried rice.
                    
                    Carefully processed to preserve its natural nutrients and fragrance, this rice ensures that every meal 
                    is not just wholesome but also indulgent. Perfect for daily use or festive occasions, 1401 Steam Basmati 
                    guarantees a delightful dining experience.
                `,
                quality: `
                    Our 1401 Steam Basmati Rice is sourced from the best basmati fields and processed using modern steaming 
                    techniques to enhance its natural qualities. The grains remain separate and fluffy after cooking, making 
                    it ideal for both casual meals and elaborate feasts.
                    
                    Naturally gluten-free and rich in essential nutrients, this rice is a healthy and versatile staple 
                    for your kitchen. Its consistent quality and taste make it a favorite among chefs and home cooks worldwide.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988708/1401-creamy-sella-basmati-rice-1688188482-6961892_i3aqfg.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988715/p3_oobec1.png",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988708/1401-steam-basmati-rice-500x450_wb74ad.jpg"
                ]
            },
            "Pusa Sella": {
                title: "Pusa Sella Basmati Rice – The Perfect Blend of Aroma and Taste",
                description: `
                    Pusa Sella Basmati Rice is a versatile and premium-quality rice variety known for its medium-long grains, 
                    delightful aroma, and exceptional taste. It is a preferred choice for making delicious biryanis, 
                    fried rice, and pulao, as well as for everyday meals.
                    
                    The unique parboiling process enhances its texture and ensures that the grains remain fluffy 
                    and separate after cooking. Ideal for those who seek both quality and flavor in every dish, 
                    Pusa Sella Basmati Rice guarantees a wholesome dining experience.
                `,
                quality: `
                    Our Pusa Sella Basmati Rice is sourced from select farms and undergoes a meticulous parboiling process 
                    that retains its natural nutrients while enhancing its cooking properties. Known for its consistent 
                    quality, this rice is a trusted choice for professional chefs and home cooks alike.
                    
                    Rich in essential nutrients, naturally gluten-free, and easy to digest, Pusa Sella Rice is a 
                    healthier alternative for your everyday meals and special occasions.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988952/p2_qiswiw.png",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988952/raw-pusa-rice-500x500_hernob.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735988951/pusa-basmati-sella-rice-500x500_kckbey.webp"
                ]
            },
            "Pusa Golden Sella": {
                title: "Pusa Golden Sella Basmati Rice – Premium Quality with Golden Perfection",
                description: `
                    Pusa Golden Sella Basmati Rice stands out with its vibrant golden hue and rich aroma. 
                    This rice variety is renowned for its long grains, firm texture, and superior cooking quality, 
                    making it ideal for biryanis, fried rice, pulao, and other gourmet dishes.
                    
                    The golden color comes from a unique parboiling process that locks in essential nutrients 
                    while preserving the natural taste and aroma. Whether it's a special celebration or an everyday meal, 
                    Pusa Golden Sella ensures a luxurious dining experience.
                `,
                quality: `
                    Our Pusa Golden Sella Basmati Rice is sourced from premium farms and undergoes stringent quality checks 
                    to maintain its high standards. The parboiling process enhances its nutrient content, 
                    making it a healthier option compared to regular white rice. 
            
                    Known for its exceptional cooking performance, this rice remains fluffy and separate after cooking, 
                    making it the preferred choice for chefs and home cooks alike.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989170/pusa-golden-sella-basmati-rice-500x500_bjibnl.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989172/uncooked-basmati-rice-2021-12-21-02-24-58-utc_juzsqw.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989171/pusa-golden-sella-basmati-rice-1688189531-6961941_q8hoko.jpg"
                ]
            },
            "Sugandha Steam": {
                title: "Sugandha Steam Basmati Rice – Aromatic and Versatile Long-Grain Rice",
                description: `
                    Sugandha Steam Basmati Rice is a premium-quality long-grain rice known for its delicate aroma and exceptional taste. 
                    Ideal for a variety of dishes, this rice cooks to perfection, delivering fluffy and separate grains every time. 
            
                    Whether you're preparing biryanis, pulao, fried rice, or daily meals, Sugandha Steam adds a touch of elegance 
                    and flavor to your culinary creations. Its versatility and nutritional value make it a favorite choice for families 
                    and chefs alike.
                `,
                quality: `
                    Our Sugandha Steam Basmati Rice is sourced from trusted farms and processed with care to retain its natural aroma and nutrients. 
                    It undergoes a unique steaming process that enhances its texture and ensures uniform cooking. 
            
                    This rice is free from additives and preservatives, making it a healthy option for those who prioritize quality and authenticity 
                    in their meals. Each grain is aged to perfection, ensuring a soft yet firm texture when cooked.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989347/sugandha-sella-rice_bmx3dc.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989348/sugandha-steam-basmati-rice-1496833932-3045029_pv0u3w.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989350/top-view-tasty-cooked-rice-inside-brown-plate-white_a4oovy.jpg"
                ]
            },
            "Sugandha Sella": {
                title: "Sugandha Sella Basmati Rice – Flavorful and Premium Long-Grain Rice",
                description: `
                    Sugandha Sella Basmati Rice is a premium-quality, long-grain rice that offers a delightful aroma, soft texture, and exceptional taste. 
                    It is perfect for preparing a variety of cuisines, including biryanis, fried rice, and everyday meals. 
            
                    Known for its versatility and consistent quality, Sugandha Sella ensures that every meal is both nutritious and delicious. 
                    It cooks to perfection, delivering non-sticky and fluffy grains that enhance the overall dining experience.
                `,
                quality: `
                    Our Sugandha Sella Basmati Rice is carefully sourced from select farms and processed with precision to retain its natural 
                    aroma, nutrients, and taste. Each grain undergoes an advanced parboiling process, which strengthens the rice's texture 
                    and enhances its cooking quality.
            
                    Free from artificial additives and preservatives, this rice is naturally gluten-free and rich in essential nutrients, 
                    making it a healthy choice for you and your family. Its long shelf life and premium aging process further ensure a superior 
                    culinary experience.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989618/images_grmbpp.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989619/sugandha-sella-basmati-rice_1_jlryuo.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989620/Sugandha-Sella-Basmati-Rice_wxlpim.jpg"
                ]
            },
            "Sugandha Golden Sella": {
                title: "Sugandha Golden Sella Basmati Rice – Premium Golden Long-Grain Rice",
                description: `
                    Sugandha Golden Sella Basmati Rice is a premium, golden-hued long-grain rice that offers a rich aroma, delicious flavor, 
                    and non-sticky texture, perfect for special occasions and everyday meals alike. It’s ideal for preparing aromatic biryanis, 
                    pulaos, fried rice, and more.
            
                    With its excellent cooking qualities, Sugandha Golden Sella ensures that every dish you prepare is light, fluffy, and full of 
                    flavor. Its unique golden color is a result of a careful aging and processing method that enhances its taste and texture.
                `,
                quality: `
                    Sourced from the finest farms, Sugandha Golden Sella Basmati Rice is naturally aged to perfection to preserve its aroma 
                    and flavor. Each grain is parboiled to ensure firmness, making it ideal for dishes requiring long, separate grains.
            
                    Free from harmful additives and preservatives, this rice is an excellent choice for those looking for a healthier alternative 
                    to regular rice. Its long shelf life and superior cooking quality make it a pantry staple for any kitchen.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989845/sugandha-golden-sella-rice-980_g4tupf.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989844/sugandha-golden-non-basmati-rice-1479293111-2565490_ybogyk.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735989843/Sugandha-Basmati-Rice_qoiula.jpg"
                ]
            },
            "Sharbati Steam": {
                title: "Sharbati Steam Basmati Rice – Premium Aromatic Long-Grain Rice",
                description: `
                    Sharbati Steam Basmati Rice is a premium, aromatic long-grain rice known for its delicate fragrance, soft texture, and non-sticky nature. 
                    Perfect for everyday meals, Sharbati Steam Basmati is ideal for making biryanis, pulaos, fried rice, and other aromatic rice-based dishes.
            
                    Grown in the fertile plains of India, this variety of basmati rice is carefully aged to enhance its flavor and aroma, providing an unforgettable 
                    dining experience. Each grain is steam-cooked to preserve its natural goodness, making it a perfect addition to your kitchen pantry.
                `,
                quality: `
                    Sharbati Steam Basmati Rice is sourced from the best farms, where it is naturally aged to perfection to preserve its distinct aroma, 
                    flavor, and texture. The steaming process ensures that each grain is firm, long, and fluffy, providing a satisfying bite with every meal.
            
                    This high-quality rice is free from additives and preservatives, ensuring that you're consuming a natural product that is as healthy as it is delicious.
                    Its excellent cooking quality makes it suitable for both casual and festive occasions.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735990037/Sharbati-Steam_tlidkp.png",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737547894/freepicdownloader.com_-rice-flakes-rice-noodles-rice-bread-rice-top-view-medium_sna9sf.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735990039/Sharbati-Steam-Rice_yjdxuh.jpg"
                ]
            },
            "Sharbati Sella": {
                title: "Sharbati Sella Basmati Rice – Premium Aged Rice with Rich Aroma",
                description: `
                    Sharbati Sella Basmati Rice is a premium variety known for its long, slender grains, rich aroma, and fluffy texture. 
                    The rice undergoes a traditional aging process to enhance its flavor and aroma, making it ideal for making biryanis, pulaos, and other aromatic rice dishes.
            
                    Harvested from the best basmati rice fields, Sharbati Sella Basmati brings a rich and authentic flavor to your meals. It’s a versatile, high-quality rice that’s perfect for both everyday meals and special occasions.
                `,
                quality: `
                    Sharbati Sella Basmati Rice is naturally aged to bring out the best in each grain. The sella process (parboiling) ensures the rice remains separate and fluffy after cooking, with a rich, aromatic flavor that enhances the taste of every dish.
            
                    It is free from artificial additives, making it a healthy and natural choice for all your rice-based recipes. Whether you’re making a traditional Indian dish or experimenting with new recipes, this rice will elevate your meals with its exquisite flavor and texture.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735990245/1573562477765_vukxux.png",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735990246/sharbati-sella-basmati-rice_jrre28.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735990247/Sharbati-Sella-Rice_xb45pf.jpg"
                ]
            },
            "Sharbati Golden Sella": {
                title: "Sharbati Golden Sella Basmati Rice – Aromatic, Premium, and Perfectly Aged",
                description: `
                    Sharbati Golden Sella Basmati Rice is a premium variety that’s known for its rich aroma, long grains, and smooth texture. This high-quality rice is naturally aged to enhance its flavor, making it the perfect choice for biryanis, pilafs, and other aromatic dishes.
            
                    The golden sella process (parboiling) ensures that each grain retains its unique aroma and stays separate and fluffy after cooking. Whether you're preparing traditional Indian cuisine or global dishes, Sharbati Golden Sella Basmati will take your meals to the next level.
                `,
                quality: `
                    Sharbati Golden Sella Basmati Rice undergoes a traditional aging and parboiling process to ensure its long grains stay intact and maintain their texture during cooking. This process also enhances the rice’s aroma, making it the ideal choice for flavorful, aromatic dishes.
            
                    It is free from artificial additives and preservatives, offering a natural, healthy option for your cooking needs. The rice's rich taste, combined with its non-stick nature, makes it perfect for special occasions or everyday meals.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735990845/sharbati-golden-sella-rice_makgav.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735990844/1121-golden-sella-rice-500x500_yeevah.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735990844/product_images-bc-full-dir_110-3299596-sharbati-golden-sella-rice-1535517-500x500_uzhsdj.webp"
                ]
            },
            "P.R. 11 Steam": {
                title: "P.R. 11 Steam Basmati Rice – Premium Quality, Aroma, and Long Grains",
                description: `
                    P.R. 11 Steam Basmati Rice is a high-quality, aromatic rice variety, known for its long, slender grains and exceptional aroma. This rice is processed through a steam method, which enhances its natural flavor and aroma, making it an ideal choice for dishes like biryanis, pilafs, and regular home meals. The steam processing locks in the nutrients, ensuring that the rice maintains its texture, taste, and quality.
            
                    The long grains of P.R. 11 Steam Basmati Rice expand upon cooking, providing a fluffy, non-sticky texture. This makes it perfect for serving with curries, gravies, and stir-fries. Whether you're preparing a festive meal or a simple everyday dish, P.R. 11 Steam Basmati Rice brings an authentic taste to your table.
            
                    The rice is naturally gluten-free and packed with essential nutrients, making it a healthy addition to your diet. Rich in fiber, vitamins, and minerals, it supports digestive health and offers a light, non-heavy option for meal preparation. The rice retains its natural sweetness and distinct aroma, which is a hallmark of high-quality basmati.
            
                    Ideal for both casual home meals and gourmet cooking, P.R. 11 Steam Basmati Rice is the rice of choice for those who appreciate the superior quality and premium taste of authentic Basmati rice.
                `,
                quality: `
                    Our P.R. 11 Steam Basmati Rice is carefully sourced from premium fields known for producing the finest Basmati grains. The steaming process not only helps to preserve the natural aroma of the rice but also ensures that it maintains its nutritional integrity. This technique softens the rice while keeping it firm, fluffy, and separate, which is crucial for achieving the perfect texture in your dishes.
            
                    The rice is carefully graded to ensure only the highest-quality grains are selected for packaging. This meticulous process helps eliminate any broken or damaged grains, ensuring you receive the full, long grains that basmati rice is known for. The natural steaming process helps the rice retain its essential nutrients, including vitamins and minerals, which can often be lost during traditional milling.
            
                    Additionally, P.R. 11 Steam Basmati Rice is free from artificial preservatives, additives, or chemicals, making it a natural and wholesome choice for your family. Its versatility makes it suitable for a wide range of cooking methods, from deep frying to boiling, while its flavor and texture remain consistent. You can be sure that every grain is packed with purity, ensuring a healthy, nutritious meal every time you cook with it.
            
                    Whether you're preparing a festive biryani, a delicious pilaf, or a simple vegetable stir-fry, this premium rice will complement your dish and elevate your cooking experience. P.R. 11 Steam Basmati Rice is the go-to rice for those who seek both quality and flavor in their meals.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991090/16963316684555_qzocdr.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991092/pr-11-steam-non-basmati-rice-1684412602-6900592_spu9ok.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991091/PR11-Steam_pmasb5.jpg"
                ]
            },
            "P.R. 11 Sella": {
                title: "P.R. 11 Sella Basmati Rice – Premium Quality, Fragrant, and Long Grains",
                description: `
                    P.R. 11 Sella Basmati Rice is a premium quality, long-grain rice known for its distinct aroma, superior taste, and delicate texture. This rice variety is naturally processed and parboiled to preserve its nutrients and enhance its flavor. P.R. 11 Sella Basmati Rice is perfect for special occasions, such as festive biryanis, pilafs, or family meals, where flavor and presentation are key.
            
                    The parboiling process ensures that the rice retains a firm texture after cooking, making it ideal for preparing non-sticky rice dishes. The grains expand to their full length, offering a fluffy texture that is perfect for serving alongside rich curries, gravies, or stir-fried dishes. With its rich aroma, P.R. 11 Sella Basmati Rice adds an authentic touch to your meals, enhancing both the flavor and the dining experience.
            
                    This premium-quality rice is a great choice for health-conscious individuals, as it is rich in fiber, vitamins, and minerals. It supports digestion and provides a light, non-heavy meal option. The rice is also free from gluten, making it suitable for a variety of dietary needs. Whether you're cooking a special dinner or preparing a hearty meal, P.R. 11 Sella Basmati Rice ensures a nutritious and flavorful addition to your table.
                `,
                quality: `
                    Our P.R. 11 Sella Basmati Rice is carefully sourced from the finest rice fields, ensuring only the highest-quality grains are selected for packaging. The parboiling process locks in essential nutrients while preserving the rice's natural flavor. This technique helps to maintain the rice's firmness, making it ideal for biryanis, pilafs, and other rice-based dishes where the texture is key.
            
                    P.R. 11 Sella Basmati Rice undergoes rigorous quality control, with every grain being meticulously checked for size, shape, and aroma. Only long, slender grains that are free from any impurities make it to your kitchen, ensuring that you always receive the best product. The rice is also free from preservatives, chemicals, or additives, making it a natural and wholesome option for your family.
            
                    The rice's unique quality and taste are maintained throughout the packaging process, ensuring you get consistent, high-quality grains every time. P.R. 11 Sella Basmati Rice is an excellent choice for those seeking a healthy and delicious rice option for all their cooking needs.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991304/pr11-long-grain-rice-1638439087-6101592_n1x6vy.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991305/pr-11-sella-long-grain-non-basmati-rice-1663052706-6536119_j8w7gr.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991306/pr-11-sella-non-basmati-rice-1648899332-6269390_m9lo6s.jpg"
                ]
            },
            "P.R. 11 Golden Sella": {
                title: "P.R. 11 Golden Sella Basmati Rice – Premium, Aromatic, and Long-Grain Rice",
                description: `
                    P.R. 11 Golden Sella Basmati Rice is a premium variety of parboiled rice that is perfect for a variety of dishes, including biryanis, pilafs, and everyday meals. Known for its golden hue, long grains, and exceptional aroma, this rice adds a luxurious touch to your meals. The unique golden color is a result of the parboiling process, which enhances the rice's flavor, making it ideal for dishes that require a fragrant, non-sticky texture.
            
                    This variety of basmati rice is carefully processed to preserve its nutrients and provide a fluffy, non-sticky texture upon cooking. The long grains expand during cooking, offering an elegant presentation and a perfect texture, whether you're making a traditional Indian dish or experimenting with international recipes. Its natural fragrance enhances the dining experience, making each bite a delight.
            
                    P.R. 11 Golden Sella Basmati Rice is a great choice for health-conscious individuals, as it is rich in essential nutrients like fiber and vitamins, which support a healthy digestive system. Whether you're preparing a hearty meal for your family or hosting a special event, P.R. 11 Golden Sella Basmati Rice ensures a nutritious and flavorful addition to your table.
                `,
                quality: `
                    P.R. 11 Golden Sella Basmati Rice is selected from the finest basmati rice fields, ensuring that each grain is of the highest quality. The rice undergoes a precise parboiling process that locks in essential nutrients while preserving the rice’s natural fragrance and taste. This method also helps maintain the rice’s non-sticky and fluffy texture, making it perfect for dishes that require separate, long grains.
            
                    The golden color of the rice adds to its aesthetic appeal, making it a great choice for special occasions, festive meals, and gatherings. The rice is free from preservatives and artificial chemicals, ensuring that you are serving your family and guests a natural, wholesome meal. The grains are uniform in size and shape, ensuring consistent cooking results every time.
            
                    This premium rice is ideal for health-conscious consumers who want a nutritious and flavorful rice variety that is rich in vitamins, minerals, and fiber. It is also gluten-free, making it suitable for those with dietary restrictions. Whether you're cooking for a large family or a small gathering, P.R. 11 Golden Sella Basmati Rice is sure to impress with its delicious flavor and perfect texture.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991494/image1683526887_gbloii.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991495/pr-11-golden-sella-rice_t42ckz.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991497/1121-GOLDEN-SELLA-3-scaled_wpqkbi.jpg"
                ]
            },
            "Long Grain Parboiled": {
                title: "Long Grain Parboiled Rice – Premium Quality for Everyday Meals",
                description: `
                    Long Grain Parboiled Rice is a premium variety of rice known for its long, slender grains and exceptional cooking properties. Parboiling is a process that preserves the nutrients in the rice, enhancing its nutritional value while also improving its texture. Ideal for daily cooking, this rice is versatile, easy to prepare, and perfect for a variety of dishes including pilafs, biryanis, stir-fries, and more.
            
                    The unique parboiling process locks in vitamins and minerals, ensuring a healthier meal without compromising on taste. The long grains stay separate and fluffy during cooking, offering a light, non-sticky texture that is perfect for both simple meals and elaborate recipes. Whether you are preparing a family meal or a gourmet dish, Long Grain Parboiled Rice offers an excellent balance of nutrition and taste.
            
                    This rice is gluten-free, making it a great choice for those with dietary restrictions. It’s an ideal option for anyone looking for a healthy and nutritious staple that enhances the flavor and texture of their dishes. With its rich nutritional profile and versatility, Long Grain Parboiled Rice is a must-have pantry staple for every home cook.
                `,
                quality: `
                    Our Long Grain Parboiled Rice is sourced from the finest rice fields, ensuring high-quality grains that are processed to preserve their natural nutrients. The parboiling process helps retain essential vitamins and minerals, making this rice a nutritious addition to your diet. The long grains expand during cooking, offering a fluffy, non-sticky texture that is perfect for a wide range of dishes.
            
                    The rice is free from preservatives and additives, providing a natural and wholesome product. It’s also high in fiber, making it a great option for those looking to improve their digestive health. With its clean, natural taste and superior quality, Long Grain Parboiled Rice is a perfect choice for daily meals.
            
                    This rice is also easy to cook and requires minimal preparation, making it a convenient choice for busy families or home cooks looking for a quick yet nutritious meal option. Whether you’re preparing a simple stir-fry or a complex curry, Long Grain Parboiled Rice will complement any dish with its excellent texture and flavor.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737548684/freepicdownloader.com_-food-background-rice-close-up-normal_nlbpq9.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991669/165687-ir-36-long-grain-parboiled-rice-1000x1000_bnjnzf.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737548684/freepicdownloader.com_-raw-rice-heart-shaped-plate-blue-background-normal_qvalci.jpg"
                ]
            },
            "Long Grain White Rice": {
                title: "Long Grain White Rice – Premium Quality for Delicious and Versatile Meals",
                description: `
                    Long Grain White Rice is a classic and versatile staple in kitchens worldwide. Known for its long, slender grains and light texture, this rice is perfect for a variety of dishes, from everyday meals to special occasions. Its distinct long grains remain separate and fluffy when cooked, making it ideal for pilafs, fried rice, stir-fries, and even as a side dish.
            
                    Long Grain White Rice is carefully processed to remove the outer husk, leaving behind perfectly white, smooth grains. This rice is an excellent choice for those who prefer a lighter, non-sticky texture in their meals. It's easy to prepare and pairs well with a variety of cuisines, from Indian curries to Asian stir-fries, making it an essential item for any pantry.
            
                    This rice is not only delicious but also highly nutritious. While it’s rich in carbohydrates, it provides a quick and sustained source of energy. The grains remain light and fluffy after cooking, adding an elegant touch to any meal. Whether you're making a simple rice bowl or a flavorful biryani, Long Grain White Rice will complement your dish with its premium quality and great taste.
                `,
                quality: `
                    Our Long Grain White Rice is sourced from the finest rice fields, ensuring high-quality grains that are carefully processed to maintain their purity and freshness. The rice undergoes minimal processing, retaining its natural texture and flavor while being free from additives and preservatives.
            
                    With its long, slender grains and exceptional cooking properties, Long Grain White Rice is the perfect choice for anyone who enjoys a light, fluffy, and non-sticky texture. It's versatile enough to be used in a variety of cooking methods, from boiling and steaming to frying and baking. Whether you’re preparing a simple home-cooked meal or a gourmet dish, Long Grain White Rice offers unmatched quality and taste.
            
                    This rice is also a great source of energy, providing a quick carbohydrate boost for those with active lifestyles. It is ideal for families, busy professionals, or anyone looking for an easy-to-prepare and delicious meal option.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991827/long-grain-non-basmati-rice-1701344473-7189146_xlzbje.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991828/long-grain-non-basmati-rice-1720160990-7507921_gyjd3w.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991830/white-rice-500x500_o9nzdh.webp"
                ]
            },
            "Swarna Parboiled": {
                title: "Swarna Parboiled Rice – Nutritious, Aromatic, and Perfect for Everyday Meals",
                description: `
                    Swarna Parboiled Rice is a premium-quality rice variety that is parboiled to enhance its nutritional content, making it a healthier choice for your meals. Parboiling is a process where the rice is partially boiled in its husk, which helps retain more vitamins and minerals compared to regular white rice. The result is a rice that is not only more nutritious but also has a distinct aroma and flavor that elevates any dish.
            
                    Swarna Parboiled Rice is known for its slightly firm texture and non-sticky nature when cooked, making it an ideal choice for both everyday meals and special occasions. Whether you're preparing a hearty biryani, pilaf, or simply a side dish, Swarna Parboiled Rice adds a unique touch with its rich aroma and fluffy texture.
            
                    This rice variety is perfect for those looking for a healthy, nutritious, and versatile option for their cooking. It's rich in essential nutrients such as fiber, vitamins, and minerals, making it an excellent choice for health-conscious individuals. The firm texture ensures that the grains remain separate and fluffy, giving your dishes an elegant and satisfying texture.
            
                    Swarna Parboiled Rice is suitable for a wide variety of dishes and cooking methods. Its distinctive aroma and flavor make it a popular choice for biryanis, fried rice, and other rice-based dishes. It is easy to cook, and its firm grains make it ideal for dishes that require a rice variety that holds its shape well.
                `,
                quality: `
                    Swarna Parboiled Rice is sourced from the finest rice fields and undergoes a unique parboiling process to preserve its nutritional value and enhance its texture. The parboiling process helps retain the rice's natural nutrients, making it a healthier choice compared to regular rice varieties. This rice has a firm texture, and its grains remain separate and fluffy when cooked, making it perfect for a variety of rice dishes.
            
                    The quality of Swarna Parboiled Rice is carefully monitored to ensure each grain is perfect for cooking. The rice is free from additives and preservatives, making it a pure, natural product that retains all the nutrients your body needs. It’s an excellent choice for individuals and families looking to incorporate more whole grains into their diet while enjoying a delicious and aromatic rice experience.
            
                    With its pleasant aroma and fluffy texture, Swarna Parboiled Rice is a great addition to your kitchen, whether you're cooking traditional meals or experimenting with new recipes. It’s a versatile rice variety that is perfect for both simple meals and more complex dishes.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991989/images_1_qlukg8.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991990/images_adkyjz.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735991993/swarna-parboiled-rice-5-broken_yzsd1f.jpg"
                ]
            },
            "Swarna White Rice": {
                title: "Swarna White Rice – Premium Quality White Rice for Your Daily Meals",
                description: `
                    Swarna White Rice is a premium-quality, aromatic white rice that is perfect for everyday meals. Known for its long grains, Swarna White Rice cooks to perfection with a fluffy texture and a light aroma that enhances your dishes. It’s an ideal choice for a variety of dishes, from simple rice preparations to elaborate biryanis and pilafs.
            
                    The soft, fluffy texture and subtle fragrance of Swarna White Rice make it a versatile ingredient that pairs perfectly with curries, stews, stir-fries, and more. Whether you're preparing a family dinner or a special meal for guests, Swarna White Rice brings elegance and flavor to any table.
            
                    Our Swarna White Rice is carefully sourced and processed to ensure the highest quality. It is washed thoroughly to remove excess starch, leaving the rice grains separate and perfect for all types of cooking methods. The rice retains its nutritional value, making it a wholesome addition to your meals.
                `,
                quality: `
                    Swarna White Rice is known for its superior quality and exceptional cooking performance. The grains are long and slender, ensuring that they remain fluffy and non-sticky when cooked. It is an excellent choice for dishes that require separate, non-clumpy grains, such as biryanis, pilafs, and fried rice.
            
                    This rice is processed with care to ensure that it retains its natural aroma and taste. It is carefully cleaned and packed to preserve its freshness and ensure that every grain reaches you in perfect condition. Swarna White Rice is free from additives and preservatives, providing you with a natural, healthy, and delicious rice option for your meals.
            
                    With its exceptional texture and taste, Swarna White Rice is perfect for a wide variety of cuisines and dishes. It is ideal for anyone who enjoys high-quality rice that is both nutritious and delicious. Whether you are cooking traditional or modern dishes, Swarna White Rice makes every meal more flavorful and satisfying.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735992156/swarna-rice-1622198321-5839419ream_cvwwcl.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735992156/swarna-white-rice-500x500_wtxohb.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735992156/bg-rice-swarna-masuri-01_jwyvce.jpg"
                ]
            },
            "Sona Mansoori Steam": {
                title: "Sona Mansoori Steam Rice – Premium Quality Rice for Everyday Meals",
                description: `
                    Sona Mansoori Steam Rice is a premium variety of rice known for its distinct aroma and long, slender grains. Perfect for everyday meals, this rice variety adds a unique flavor to your dishes, making it a staple in Indian and other South Asian kitchens. The steaming process preserves the rice's natural nutrients while ensuring that the grains remain separate and fluffy when cooked.
            
                    This rice is a great option for a variety of dishes, including biryani, pulao, curries, and fried rice. Whether you're cooking for a family meal or a special occasion, Sona Mansoori Steam Rice provides a rich, aromatic base for your favorite recipes.
            
                    Sona Mansoori Steam Rice is naturally rich in essential nutrients, making it a healthy choice for a balanced diet. It is known for its non-sticky texture, which ensures that the grains remain separate after cooking, making it ideal for both daily meals and festive occasions.
                `,
                quality: `
                    Sona Mansoori Steam Rice is celebrated for its excellent quality and distinct taste. The rice is processed using the steaming method, which enhances its flavor and nutritional value. During steaming, the rice absorbs water and steam, which helps it retain essential vitamins and minerals, ensuring it is a nutritious choice for your meals.
            
                    The grains of Sona Mansoori Steam Rice are long, slender, and non-sticky, making it perfect for dishes that require fluffy, separate grains, such as biryanis, pulaos, and rice-based side dishes. The rice maintains its texture even after cooking, ensuring that each dish turns out just right every time.
            
                    This rice is free from additives and preservatives, offering a natural and healthy product for your kitchen. Sona Mansoori Steam Rice is processed with the utmost care to ensure that it meets the highest quality standards, making it a reliable choice for every meal.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737548960/freepicdownloader.com_-pasta-dish-normal_faop0p.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735992305/bg-rice-swarna-masuri-01_vvagzb.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735992314/sona-masoori-steam-rice-500x500_dkllhs.webp"
                ]
            },
            "Sona Mansoori Raw": {
                title: "Sona Mansoori Raw Rice – High-Quality, Aromatic Raw Rice for Daily Meals",
                description: `
                    Sona Mansoori Raw Rice is a premium, high-quality variety of rice known for its delicate aroma and long, slender grains. Ideal for a variety of culinary uses, this raw rice is perfect for making biryanis, pulaos, and other traditional rice dishes. Its unique fragrance and fluffy texture make it a favorite choice for both everyday meals and special occasions.
            
                    Unlike other rice varieties, Sona Mansoori Raw Rice retains its natural taste and nutritional value. The raw, unprocessed grains are perfect for those who prefer to cook their rice to their preferred level of doneness, ensuring that it meets all your cooking needs.
            
                    With its superior quality and distinct aroma, Sona Mansoori Raw Rice provides the perfect base for rice-based dishes. Whether you are preparing a simple meal or a festive feast, this rice adds a touch of elegance and flavor to your dish.
                `,
                quality: `
                    Sona Mansoori Raw Rice is carefully sourced and processed to retain its natural nutrients and taste. The raw rice grains are long and slender, offering a consistent texture when cooked. Known for its non-sticky, fluffy texture, Sona Mansoori Raw Rice ensures that your dishes turn out perfectly every time.
            
                    The rice is free from additives, preservatives, and artificial coloring, making it a healthy and natural choice for your kitchen. Its rich aroma and excellent flavor profile make it a great addition to both everyday and special meals, including biryanis, pulaos, and fried rice.
            
                    Sona Mansoori Raw Rice is processed with care to ensure that it meets the highest quality standards. Each grain is free from impurities and carefully packaged to preserve its freshness, making it a reliable choice for your cooking needs.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737549138/freepicdownloader.com_-rice-flakes-rice-noodles-rice-bread-rice-top-view-normal_vfknot.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735992494/71Fb9NkB4pL_pcrutn.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735992497/SonaMasooriRawRice_2_1200x1200_gi4sxv.webp"
                ]
            }

        }
    },
    Spices: {
        title: "Spices",
        description: "Explore our premium range of whole spices, each carefully sourced for rich aroma and superior flavor.",
        quality: `Our spices are sourced directly from farms, ensuring purity and freshness. Each spice undergoes minimal processing to retain its essential oils and natural flavor, making them perfect for cooking, health benefits, and everyday use.`,
        items: {
            "Turmeric": {
                title: "Turmeric – The Golden Spice for Flavorful Dishes and Health Benefits",
                description: `
                    Our premium turmeric powder is known for its vibrant color, earthy flavor, and numerous health benefits.
                    Turmeric is a staple spice in Indian cuisine, adding depth and warmth to curries, rice dishes, and soups.
                    It is also prized for its anti-inflammatory properties, antioxidant content, and immune-boosting benefits.
                    `,
                quality: `
                    Sourced from the best farms, our turmeric is carefully harvested and processed to preserve its natural oils, earthy flavor,
                    and vibrant color. We ensure the highest quality by providing freshly packed turmeric powder, retaining its full aromatic and
                    taste potential. Our turmeric is free from additives and preservatives, making it a perfect choice for anyone looking to elevate
                    their meals with natural, pure flavor.
                    `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737615578/kghjkk_1_ka8xlx-removebg-preview_ku0zms.png",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737615037/_freepicdownloader.com_-turmeric-powder-white-cup-white-space-normal-removebg-preview_bj7mpl.png",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737614837/_freepicdownloader.com_-bowl-turmeric-is-white-table-normal-removebg-preview_zsxevo.png"
                ]
            },
            "Chilli": {
                title: "Chilli – The Fiery Spice for Bold, Spicy Dishes and Vibrant Flavors",
                description: `
                    Our premium red chilli powder is known for its bold, spicy flavor and vibrant color, adding heat and depth to a variety of dishes.
                    Chilli is a versatile spice that enhances the taste of curries, marinades, sauces, and snacks, providing a fiery kick to your cooking.
                    It is also rich in capsaicin, which offers numerous health benefits, including boosting metabolism and reducing inflammation.
                    Our red chilli powder is sourced from the best farms, ensuring freshness and quality.
                    `,
                quality: `
                    Carefully sourced from the best farms, our red chilli powder is made from sun-dried red chillies, ensuring maximum flavor and heat.
                    We ensure the highest quality by providing freshly packed red chilli powder, retaining its full aromatic and taste potential.
                    Our chilli powder is free from additives and preservatives, making it a perfect choice for anyone looking to add a spicy kick to their meals.
                    `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737613033/919_Red_Chilli_Powder_1.pdf_1_nqbwof.png",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737614686/_freepicdownloader.com_-red-chilli-lal-mirchi-mirch-with-powder-bowl-mortar-moody-background-selective-focus-normal-removebg-preview_h5foez.png",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737614334/freepicdownloader.com_-ground-paprika-plate-isolated-white-background-normal_x4nzwx.jpg"
                ]
            },
            "Black Pepper": {
                title: "Black Pepper – The King of Spices for Bold, Flavorful Dishes",
                description: `
                     Our premium whole black peppercorns are known for their bold, spicy flavor and rich aroma. 
                     Black pepper is a must-have spice for any kitchen, enhancing the taste of both savory and sweet dishes. 
                     Whether you’re preparing gourmet meals, everyday recipes, or adding an extra kick to your favorite snacks, 
                     black pepper delivers unparalleled sharpness and complexity to your cooking. It is also known for its health benefits, 
                     such as boosting metabolism and aiding digestion, making it not just flavorful but also beneficial to your overall well-being.
                     `,
                quality: `
                     Sourced from the best farms, our black pepper is carefully harvested and processed to preserve its natural oils, sharpness, 
                     and vibrant flavor. We ensure the highest quality by providing freshly packed peppercorns, retaining their full aromatic and 
                     taste potential. Our black pepper is free from additives and preservatives, making it a perfect choice for anyone looking to 
                     elevate their meals with natural, pure flavor.
                     `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735908788/black-pepper_rnv8jz.avif",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735908791/Black-Pepper-Slides-V3_2-1_ozkhru.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735908793/6-Benefits-of-Black-Pepper-some-of-its-will-surprise-you_pgkxup.webp"
                ]
            },

            "Cardamom": {
                title: "Cardamom – Aromatic Green Pods for Sweet and Savory Dishes",
                description: `
                    Our premium green cardamom pods are perfect for adding a burst of floral sweetness and exotic fragrance to both savory and sweet dishes. 
                    Known as the "queen of spices," cardamom brings a complex, slightly sweet, and spicy flavor that elevates everything from curries, 
                    biryanis, and chai to desserts like cakes and puddings. It’s not only prized for its flavor but also for its health benefits, 
                    including aiding digestion and promoting relaxation. A little goes a long way in bringing a unique, aromatic flavor to your cooking.
                `,
                quality: `
                    Carefully harvested from the best farms, our green cardamom pods are rich in essential oils, ensuring maximum flavor and aroma retention. 
                    The pods are naturally processed to preserve their delicate fragrance and potent taste, making them ideal for a wide range of culinary uses. 
                    Our cardamom is free from preservatives and additives, ensuring a pure and premium product that enhances every dish with its aromatic depth. 
                    Whether you’re brewing a cup of traditional chai or cooking gourmet meals, our cardamom delivers the perfect balance of spice and sweetness.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735908950/photo-1622824497447-b284a5493027_qplunn.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735908946/GettyImages-1134929438-2000-6ed05c6782a74f82b7229fc0de6254ec_bo7zky.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735908954/Simply-Recipes-Ingredient-Cardamom-LEAD-6-13917b2f558440c8b1ee9b1f4b1bebd4_quaguv.jpg"
                ]
            },
            "Clove": {
                title: "Clove – Strong and Aromatic Spice for Culinary and Health Benefits",
                description: `
                    Our premium cloves are handpicked for their intense aroma and warm, slightly sweet flavor, making them a versatile addition to both savory and sweet dishes. 
                    Whether you're cooking rich curries, preparing marinades, or making fragrant teas, cloves add a powerful punch of flavor. In addition to their culinary uses, 
                    cloves are known for their numerous health benefits, including promoting digestion, relieving pain, and offering antibacterial properties. 
                    Their warm, spicy notes also make them a perfect complement to desserts and baked goods, elevating any recipe with their bold, aromatic taste.
                `,
                quality: `
                    Grown in nutrient-rich soil, our cloves are carefully dried to preserve their potency and essential oils. 
                    Our cloves are free from additives and preservatives, ensuring a natural, pure spice that maintains its flavor and health benefits. 
                    They are harvested at the peak of their aroma to ensure you experience the fullest essence of clove in every use. Whether you're making a traditional masala chai 
                    or enhancing your favorite dish, our cloves offer a superior, fresh taste with every use.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909185/cloves-whole-1S-668_c4vfb7.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909186/Cloves_1000x600_fwpdiu.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909187/h%C5%99eb%C3%AD%C4%8Dek_web_final_fdkjnd.jpg"
                ]
            },
            "Coriander Seeds": {
                title: "Coriander Seeds – Earthy and Nutty Flavor for Culinary Delights",
                description: `
                    Our premium coriander seeds are known for their earthy, nutty flavor with a mild citrusy note, making them an essential ingredient in many dishes. 
                    These seeds are perfect for adding depth and complexity to curries, soups, stews, and spice blends. Coriander seeds are often used in Indian, Middle Eastern, 
                    and Mediterranean cuisines, known for their ability to balance other spices and enhance the overall flavor profile of any dish. 
                    They also play a crucial role in creating flavorful garam masalas, pickles, and dry rubs, while their slightly tangy taste provides a refreshing twist to your cooking.
                `,
                quality: `
                    Our coriander seeds are carefully sun-dried and packed to ensure they retain their natural aroma and nutritional value. 
                    We source only the best quality seeds, ensuring that they are free from additives and preservatives. These seeds are rich in antioxidants, vitamins, and dietary fiber, 
                    which contribute to your overall health and well-being. Whether you're making a spice mix or adding them to a dish, our coriander seeds provide a fresh, aromatic burst of flavor.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737548152/freepicdownloader.com_-dried-coriander-seeds-bowl-powder-green-leaves-grey-table-top-view-space-text-medium_otrmg1.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909305/coriander-seeds-1S-670_wjnkwx.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909304/coriander-seeds_j0x7nu.jpg"
                ]
            },
            "Cumin Seeds": {
                title: "Cumin Seeds – Warm and Earthy Aroma for Perfect Spice Blends",
                description: `
                    Our premium cumin seeds offer a warm, earthy flavor that enhances the taste of curries, spice blends, and classic Indian dishes like biryani, dal, and chutneys. 
                    Known for their distinctive aroma, cumin seeds are an essential ingredient in many culinary traditions, adding depth and complexity to your recipes. 
                    Whether you're making a flavorful curry, roasting vegetables, or preparing traditional spice mixes, cumin seeds provide that perfect earthy base. 
                    Their unique taste is also great for seasoning meats, soups, stews, and even marinades. 
                    Cumin is revered not just for its taste but also for its digestive benefits, making it an essential addition to your spice rack.
                `,
                quality: `
                    Sourced from the best regions known for their high-quality cumin production, our cumin seeds are carefully packed fresh to retain their maximum aroma and flavor. 
                    These seeds are rich in antioxidants, essential oils, and nutrients that contribute to digestive health, metabolism, and overall well-being. 
                    We ensure that each seed is free from additives or preservatives, so you enjoy pure, unadulterated flavor in every dish. 
                    Our cumin seeds are perfect for both cooking and health remedies, helping to boost your immunity and support digestion naturally.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909483/th_1_lin3nb.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909486/Organic-Jeera-Cumin-Seeds7479658771854209_k0olmp.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737548023/freepicdownloader.com_-top-view-dried-rosemary-wooden-spoon-medium_qlxqct.jpg"
                ]
            },
            "Dry Ginger": {
                title: "Dry Ginger – Bold and Spicy Flavor for Teas, Spice Blends, and Health Tonics",
                description: `
                    Our premium dry ginger is known for its bold, spicy flavor and is the perfect ingredient for a variety of culinary and medicinal uses. 
                    Whether you're brewing a cup of hot ginger tea, adding it to spice blends, or creating health tonics, dry ginger brings a fiery warmth that enhances any recipe. 
                    The sharp, pungent taste of our dry ginger makes it an essential part of curries, soups, and stews, offering a distinctive flavor profile that can't be replicated. 
                    Additionally, dry ginger is a natural remedy for common ailments like indigestion, nausea, and cold symptoms. 
                    Its warming properties make it ideal for promoting circulation, supporting digestion, and boosting immunity.
                `,
                quality: `
                    Sourced from organically grown ginger roots, our dry ginger is carefully dried to preserve its natural pungency and health benefits. 
                    Rich in bioactive compounds like gingerol, our dry ginger not only enhances your dishes but also provides numerous health benefits. 
                    Dried ginger has been used for centuries for its anti-inflammatory and antioxidant properties, making it a perfect addition to your wellness routine. 
                    We ensure that our dry ginger is free from chemicals, preservatives, or artificial additives, offering you the purest and most potent ginger available.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909596/ginger-dry_y62vyq.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909596/Benefits-of-Dry-Ginger-Sonth_zubykh.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909596/health-benefits-of-dry-ginger_fczzsp.jpg"
                ]
            },
            "Fennel Seeds": {
                title: "Fennel Seeds – Sweet and Aromatic for Flavorful Dishes and Fresh Breath",
                description: `
                    Our premium fennel seeds are known for their sweet, licorice-like flavor and aromatic properties, making them perfect for seasoning dishes 
                    or chewing after meals to refresh your breath. Fennel seeds are commonly used in Indian, Mediterranean, and Middle Eastern cuisines, 
                    adding a unique flavor profile to curries, soups, and spice blends. These seeds can also be enjoyed on their own as a natural mouth freshener 
                    or digestive aid. Rich in essential nutrients and antioxidants, fennel seeds promote digestion, ease bloating, and help relieve indigestion.
                `,
                quality: `
                    Sourced from organic farms, our fennel seeds are carefully harvested and processed to retain their sweet and aromatic licorice-like flavor. 
                    These seeds are known for their high content of essential oils, which contribute to their medicinal benefits and delicious taste. Our fennel seeds 
                    are packed with antioxidants, fiber, and vitamins, making them a perfect addition to your health-conscious diet. With no chemicals or preservatives 
                    added, we guarantee that you’re getting the purest and most flavorful fennel seeds available.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909727/1_3mIAJdwQioI70GwCdlv9fA_xztump.png",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909722/fennel-seeds_f6hrx8.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735909721/fennel-seeds-tout-55dbce1248f844f39d5a331b260045dc_zsbj2q.jpg"
                ]
            }
        }
    },
    OilSeeds: {
        title: "Oil Seeds",
        description: "Discover our range of oil seeds, perfect for cooking, baking, and oil-based recipes.",
        quality: "Our oil seeds are sourced from high-quality farms, ensuring freshness and quality.",
        items: {
            "Ground Nut": {
                title: "Ground Nut – Premium Ground Nut Oil for Cooking, Baking, and Oil-Based Recipes",
                description: `
                    Our high-quality Ground Nut oil is perfect for cooking, baking, and preparing oil-based recipes. Known for its neutral flavor and 
                    high smoke point, Ground Nut oil is ideal for stir-frying, deep-frying, grilling, and sautéing. This versatile oil enhances the taste of 
                    your dishes without overpowering them. It's also perfect for use in baking recipes, as it adds a light texture without affecting the taste 
                    of your baked goods. Rich in healthy fats and antioxidants, Ground Nut oil is a great choice for health-conscious individuals looking to 
                    improve their cooking while maintaining flavor and nutrition.
                `,
                quality: `
                    Sourced from organic farms, our Ground Nut oil is carefully pressed to retain its natural aroma and flavor. The oil is rich in 
                    monounsaturated fats and antioxidants, promoting heart health and offering anti-inflammatory benefits. It’s free from harmful 
                    chemicals and preservatives, ensuring you get only the best oil for your kitchen. Whether you’re cooking, baking, or creating 
                    your favorite dressings and sauces, our Ground Nut oil guarantees premium quality and great taste.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735910609/side-view-glass-with-beer-beside-peanuts-table_vi4uhh.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735910474/ground-nut2_irxrcs.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735910474/ground-nut1_nluhgd.jpg"
                ]
            },
            "Mustard": {
                title: "Mustard – Premium Mustard Oil for Cooking, Baking, and Oil-Based Recipes",
                description: `
                    Our premium Mustard oil is perfect for adding a distinct spicy flavor to your dishes. Ideal for cooking, baking, and oil-based 
                    recipes, mustard oil enhances the taste of curries, stir-fries, marinades, and dressings. Known for its sharp, tangy flavor, 
                    mustard oil can also be used in pickling to give an extra zing to your favorite preserves. With its high smoking point, it is 
                    suitable for deep frying and pan frying, maintaining its flavor and integrity even at high temperatures. A staple in many 
                    traditional cuisines, mustard oil offers a distinctive taste and numerous health benefits.
                `,
                quality: `
                    Sourced from the finest organic mustard seeds, our mustard oil is cold-pressed to retain its natural aroma, flavor, and health 
                    benefits. Rich in Omega-3 fatty acids and antioxidants, mustard oil promotes heart health and is known for its anti-inflammatory 
                    properties. It’s free from artificial preservatives and chemicals, ensuring that you receive only the highest quality oil. Perfect 
                    for both traditional recipes and modern cooking, our mustard oil is a great addition to any kitchen.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735911435/cereals_aryrcb.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735911534/mustard1_t8m4zj.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735911535/mustard2_md0zt5.jpg"
                ]
            },
            "Sesame Seeds": {
                title: "Sesame Seeds – Nutritious and Versatile Seeds for Cooking, Baking, and Oil-Based Recipes",
                description: `
                    Our premium sesame seeds are perfect for a variety of culinary uses, including cooking, baking, and oil-based recipes. These tiny 
                    seeds pack a nutritious punch, offering a subtle nutty flavor and a delightful crunch to your dishes. Whether sprinkled on salads, 
                    incorporated into granola, or used in hummus and tahini, sesame seeds add texture and flavor to your meals. Rich in healthy fats, 
                    protein, and essential minerals, these seeds are also an excellent source of calcium and iron, making them an ideal choice for 
                    boosting your diet. The oil extracted from sesame seeds is perfect for stir-frying, baking, and dressing, adding a mild yet 
                    delicious taste to various dishes.
                `,
                quality: `
                    Our sesame seeds are sourced from the finest organic farms, ensuring they are free from pesticides and harmful chemicals. 
                    These seeds are carefully harvested and packed to preserve their natural aroma, flavor, and nutritional value. Rich in healthy 
                    fats, fiber, and antioxidants, sesame seeds are a great addition to any diet. The seeds are packed fresh to maintain their 
                    crunch and light, nutty flavor. Whether you're making sesame oil, topping your favorite dish, or adding them to your baking, 
                    our sesame seeds deliver premium quality every time.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735911256/white-sesame_hemhx9.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735911272/sesame-seeds1_idvukb.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735911273/sesame-seeds2_zdeeam.jpg"
                ],
            },

        }
    },
    EdibleOil: {
        title: "Edible Oil",
        description: "Explore our range of pure and high-quality edible oils, perfect for everyday cooking and special recipes.",
        quality: "Our edible oils are extracted using traditional methods to retain purity and nutritional value.",
        items: {
            "Corn Oil": {
                title: "Corn Oil – Ideal for Deep Frying and Light Cooking",
                description: `
                    Our premium corn oil is perfect for deep frying, sautéing, and light cooking. Known for its mild flavor and high smoke point, 
                    corn oil is a versatile cooking oil that can withstand high temperatures, making it ideal for frying foods to a crispy 
                    perfection. It’s also perfect for baking, making salad dressings, or as a base for sautéing vegetables. Rich in polyunsaturated 
                    fats and vitamin E, corn oil is a healthier choice for your cooking needs. Its neutral taste ensures that it doesn’t overpower 
                    the natural flavors of your dishes, allowing you to achieve the perfect taste in every meal.
                `,
                quality: `
                    Our corn oil is extracted from high-quality corn seeds, ensuring that only the purest and freshest oil is delivered to you. 
                    It undergoes a meticulous cold-pressing process to retain its natural properties, making it free from harmful additives and 
                    preservatives. The oil is packed fresh to ensure that it maintains its mild flavor, high smoke point, and optimal nutritional 
                    benefits. Corn oil is a rich source of essential fatty acids and antioxidants, supporting a healthy lifestyle while being a 
                    reliable choice for cooking and frying.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735911919/images_sfdddb.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735911918/cornoil2_rjfhpz.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735911917/corn-oil.JPG_tcsjsb.webp"
                ]
            },
            "Mustard Oil": {
                title: "Mustard Oil – Cold-Pressed for Authentic Aroma and Flavor",
                description: `
                    Our cold-pressed mustard oil is perfect for those who seek the authentic aroma and bold, pungent flavor that mustard oil 
                    is known for. Ideal for Indian and Asian cuisines, this oil adds a rich, spicy kick to curries, stir-fries, and marinades. 
                    Besides its culinary uses, mustard oil is also an excellent choice for massages due to its therapeutic properties. It helps 
                    stimulate blood circulation and is known for its antibacterial and anti-inflammatory effects. With its high content of 
                    omega-3 fatty acids and antioxidants, mustard oil not only enhances your dishes but also promotes overall well-being.
                `,
                quality: `
                    Our mustard oil is extracted using a traditional cold-press method, ensuring that the natural aroma, flavor, and nutritional 
                    benefits are preserved. Completely free from additives and preservatives, our mustard oil is pure and natural, making it a 
                    healthier choice for your kitchen and personal care. Whether you're cooking or indulging in self-care, our mustard oil 
                    provides a rich and authentic taste and quality. It’s perfect for deep frying, sautéing, or even as a massage oil.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912112/mustard-oil-benefits-1729772037293_qw0f1a.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912111/66589857_si2gws.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912111/images_1_ghp65h.jpg"
                ]
            },
            "Palmolein Oil": {
                title: "Palmolein Oil – Pure and Versatile Cooking Oil for Frying and Light Cooking",
                description: `
                    Our Palmolein Oil is a refined, light oil ideal for deep frying, sautéing, and light cooking. Known for its high smoke point, 
                    Palmolein Oil ensures your dishes remain crisp and flavorful. It is an excellent choice for everyday cooking, as it enhances 
                    the taste of your meals without overpowering them. With a neutral flavor, it seamlessly blends into a variety of dishes. 
                    Palmolein Oil is also a source of essential fatty acids, making it a healthier option for your kitchen.
                    
                    Aside from its culinary uses, Palmolein Oil is also widely appreciated for its versatility. It can be used in hair care and 
                    massage therapy, providing nourishment and promoting healthy, shiny hair and skin. Whether for your kitchen or wellness 
                    routine, Palmolein Oil is a must-have.
                `,
                quality: `
                    Extracted naturally from the finest palm fruit, our Palmolein Oil undergoes a refining process that retains its purity and 
                    nutritional benefits. It is free from additives and preservatives, ensuring that every drop is fresh and wholesome. With 
                    its rich source of vitamin E and antioxidants, Palmolein Oil is not only a great choice for cooking but also supports 
                    overall health. Its light texture and non-greasy nature make it perfect for all your cooking needs, including frying, 
                    sautéing, and even for skin care.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912468/images_qtotf7.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912468/637043083634220652palmoil_rchys2.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912468/Blog-3.-What-is-Palm-Olein-1-1042x775_ui9mpl.jpg"
                ]
            },
            "Sunflower Oil": {
                title: "Sunflower Oil – Healthy and Versatile Oil for Cooking",
                description: `
                    Our Sunflower Oil is a high-quality, light and versatile oil perfect for deep frying, sautéing, baking, and light 
                    cooking. Extracted from the seeds of sunflowers, it is known for its mild flavor, which makes it a perfect cooking 
                    companion for a wide range of recipes. Sunflower Oil is rich in vitamin E and low in saturated fats, offering 
                    numerous health benefits, including promoting heart health and providing essential antioxidants to the body. 
            
                    Ideal for frying at high temperatures, Sunflower Oil has a high smoke point, ensuring that it can withstand 
                    cooking at high heat without breaking down or losing its nutritional value. It is also an excellent choice for 
                    baking, salad dressings, and marinades, offering a healthy alternative to butter or other oils.
            
                    In addition to its culinary uses, Sunflower Oil is known for its skin care properties. Packed with vitamin E, 
                    it can help moisturize the skin and promote a healthy, radiant glow. Whether used in cooking or as a skin treatment, 
                    Sunflower Oil is a versatile and healthy choice for every household.
                `,
                quality: `
                    Our Sunflower Oil is naturally extracted through a cold-press process, preserving its natural nutrients without 
                    the use of additives, chemicals, or preservatives. This ensures that the oil remains pure, healthy, and safe for 
                    daily consumption. The oil is free from trans fats and is rich in polyunsaturated fats, including omega-6 fatty acids, 
                    which contribute to heart health by helping to lower cholesterol levels.
            
                    Sunflower Oil is perfect for various cooking methods, including deep frying, stir-frying, sautéing, and even baking. 
                    Its light, neutral flavor complements all types of dishes, from savory to sweet. Additionally, it has a high smoke 
                    point, making it a stable oil for cooking at high temperatures, without the risk of producing harmful compounds.
            
                    Whether you're preparing a simple stir-fry, deep-frying crispy snacks, or baking cakes and cookies, Sunflower Oil 
                    is a healthy choice that will elevate your cooking while contributing to your overall well-being.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912604/sunflower-oil2_kamulf.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912602/sunflower-oil1_x0ip4o.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912602/sunflower-oil_uapftx.jpg"
                ]
            },
            "Sesame Oil": {
                title: "Sesame Oil – Premium Cold-Pressed Oil for Cooking and Wellness",
                description: `
                    Our Sesame Oil is a pure, cold-pressed oil that is perfect for deep frying, sautéing, and light cooking. Known for its 
                    nutty flavor and rich aroma, Sesame Oil enhances the taste of your dishes while providing numerous health benefits. 
                    Rich in antioxidants and vitamins, it is an essential ingredient in many Asian cuisines and is also widely used in 
                    wellness practices for massages and skin care.
                    
                    Whether you’re cooking your favorite stir-fry, adding flavor to soups, or using it in traditional recipes, our Sesame 
                    Oil is versatile and packed with nutrients. It contains beneficial compounds like sesamol and sesamin, which have 
                    antioxidant properties, making it a healthier option for cooking. In addition, its natural anti-inflammatory properties 
                    make it ideal for massages, skin care, and hair nourishment.
                `,
                quality: `
                    Extracted naturally from premium sesame seeds, our Sesame Oil is free from additives, preservatives, and artificial 
                    chemicals. It is cold-pressed to preserve the oil's natural flavor, aroma, and nutritional value. This method of extraction 
                    ensures that the oil retains its beneficial antioxidants, vitamins, and minerals, including vitamin E, making it a 
                    healthier alternative to other oils. Its high smoke point makes it ideal for cooking at higher temperatures without 
                    losing its nutrients.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912769/sesame_oil_what_to_know_1296x728_header-1024x575_c7sdns.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912770/sesame-oil1_peiltn.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912771/sesame-oil2_iiaypn.jpg"
                ]
            },
            "Soya Oil": {
                title: "Soya Oil – Premium Oil for Cooking and Health Benefits",
                description: `
                    Our Soya Oil is a high-quality, versatile oil perfect for deep frying, sautéing, and light cooking. Extracted from 
                    the finest soybeans, it has a mild flavor that blends well with various dishes. Ideal for everyday cooking, it is also 
                    a healthy alternative to other oils due to its low saturated fat content and rich omega-3 fatty acids, making it a 
                    heart-healthy choice. 
                    Soya Oil is a staple in many kitchens for its high smoking point, making it suitable for frying at high temperatures 
                    without breaking down or losing nutritional value.
                    
                    In addition to its culinary benefits, Soya Oil is also used in skincare and massage therapy due to its natural 
                    moisturizing properties. Packed with vitamins, minerals, and antioxidants, it helps nourish and rejuvenate your skin 
                    while promoting overall wellness.
                `,
                quality: `
                    Soya Oil is naturally extracted from non-GMO soybeans without the use of additives, preservatives, or chemicals, 
                    ensuring a pure and clean product. Its extraction process preserves essential nutrients such as omega-3 fatty acids, 
                    vitamin E, and antioxidants, offering numerous health benefits. Free from artificial flavors, it provides a neutral 
                    taste that does not overpower your dishes, allowing the natural flavors of your ingredients to shine.
                    
                    This oil is a perfect choice for cooking, frying, and baking. Its high smoking point and mild flavor make it suitable 
                    for a variety of recipes, from stir-fries and deep-fried foods to baking and dressings. Moreover, its benefits extend 
                    beyond cooking, as it can also be applied to the skin for hydration and nourishment.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912902/soyabean-oil-500x500_d785fc.webp",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912903/soya-oil1_z3sits.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1735912904/soya-oil2_fbtcdh.jpg"
                ],
            },
        },
    },
    DryFruits: {
        title: "Dry Fruits",
        description: "Indulge in our premium range of dry fruits, perfect for snacking, baking, and gifting.",
        quality: "Our dry fruits are sourced from the finest farms, ensuring freshness and superior taste.",
        items: {
            "Almonds": {
                title: "Almonds – Premium Quality Almonds for Snacking and Baking",
                description: `
                    Our premium almonds are perfect for snacking, baking, and adding a nutritious crunch to your favorite dishes. 
                    Known for their rich flavor and crunchy texture, almonds are a versatile nut that can be enjoyed on their own 
                    or used in a variety of recipes. Whether you're looking for a healthy snack or a delicious ingredient for your 
                    baked goods, our almonds are a great choice. Packed with essential nutrients like vitamin E, magnesium, and 
                    healthy fats, almonds offer numerous health benefits and are a delicious addition to your diet.
                `,
                quality: `
                    Sourced from the best almond farms, our almonds are carefully selected and processed to ensure the highest quality 
                    and freshness. Each almond is packed with essential nutrients and antioxidants, making them a healthy and delicious 
                    snack option. Our almonds are free from additives, preservatives, and artificial flavors, ensuring that you get 
                    nothing but pure, natural goodness in every bite. Whether you're enjoying them on their own or incorporating them 
                    into your favorite recipes, our almonds are a nutritious and flavorful choice.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737528063/almonds_wmegfj.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737528054/almonds-bowl-marble-background_a9i2qb.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737528037/almonds-close_1_nlzxgk.jpg"
                ]
            },
            "Cashews": {
                title: "Cashews – Premium Quality Cashews for Snacking and Cooking",
                description: `
                    Our premium cashews are perfect for snacking, cooking, and adding a creamy texture to your dishes. Known for their 
                    rich, buttery flavor and delicate crunch, cashews are a versatile nut that can be enjoyed in a variety of ways. 
                    Whether you're looking for a healthy snack or a delicious ingredient for your recipes, our cashews are a great choice. 
                    Packed with essential nutrients like healthy fats, protein, and vitamins, cashews offer numerous health benefits and 
                    are a delicious addition to your diet.
                `,
                quality: `
                    Sourced from the best cashew farms, our cashews are carefully selected and processed to ensure the highest quality 
                    and freshness. Each cashew is packed with essential nutrients and antioxidants, making them a healthy and flavorful 
                    snack option. Our cashews are free from additives, preservatives, and artificial flavors, ensuring that you get 
                    nothing but pure, natural goodness in every bite. Whether you're enjoying them on their own or incorporating them 
                    into your favorite recipes, our cashews are a nutritious and delicious choice.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737376855/raw-cashews-nuts-bag-dark-background_x4gael.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737376854/raw-cashews-nuts-bowl-dark-background_yqnnxm.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737376854/natural-cashew_ilhyks.jpg"
                ]
            },
            "Pistachio": {
                title: "Pistachio – Premium Quality Pistachios for Snacking and Cooking",
                description: `
                    Our premium pistachios are perfect for snacking, cooking, and adding a creamy texture to your dishes. Known for their 
                    rich, buttery flavor and delicate crunch, pistachios are a versatile nut that can be enjoyed in a variety of ways. 
                    Whether you're looking for a healthy snack or a delicious ingredient for your recipes, our pistachios are a great choice. 
                    Packed with essential nutrients like healthy fats, protein, and vitamins, pistachios offer numerous health benefits and 
                    are a delicious addition to your diet.
                `,
                quality: `
                    Sourced from the best pistachio farms, our pistachios are carefully selected and processed to ensure the highest quality 
                    and freshness. Each pistachio is packed with essential nutrients and antioxidants, making them a healthy and flavorful 
                    snack option. Our pistachios are free from additives, preservatives, and artificial flavors, ensuring that you get 
                    nothing but pure, natural goodness in every bite. Whether you're enjoying them on their own or incorporating them
                    into your favorite recipes, our pistachios are a nutritious and delicious choice.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737377939/pistachios_2_h3xxnp.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737377939/pistachios_1_ro6ygf.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737377941/pistachios_lnixbu.jpg"
                ]
            },
            "Raisins": {
                title: "Raisins – Premium Quality Raisins for Snacking and Baking",
                description: `
                    Our premium raisins are perfect for snacking, baking, and adding a natural sweetness to your dishes. Known for their 
                    rich, sweet flavor and chewy texture, raisins are a versatile dried fruit that can be enjoyed in a variety of ways. 
                    Whether you're looking for a healthy snack or a delicious ingredient for your recipes, our raisins are a great choice. 
                    Packed with essential nutrients like fiber, vitamins, and antioxidants, raisins offer numerous health benefits and are 
                    a delicious addition to your diet.
                `,
                quality: `
                    Sourced from the best vineyards, our raisins are carefully selected and processed to ensure the highest quality and 
                    freshness. Each raisin is packed with essential nutrients and antioxidants, making them a healthy and flavorful snack 
                    option. Our raisins are free from additives, preservatives, and artificial flavors, ensuring that you get nothing but 
                    pure, natural goodness in every bite. Whether you're enjoying them on their own or incorporating them into your favorite 
                    recipes, our raisins are a nutritious and delicious choice.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737526849/raisin-currant_fxzvwk.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737526849/raisins-dried_vzoklo.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737526849/top-close-up-view-raisins-green-black-raisins-brown-bowl-cream-table_a7spju.jpg"
                ]
            },
            "Walnuts": {
                title: "Walnuts – Premium Quality Walnuts for Snacking and Baking",
                description: `
                    Our premium walnuts are perfect for snacking, baking, and adding a nutritious crunch to your favorite dishes. Known for 
                    their rich flavor and crunchy texture, walnuts are a versatile nut that can be enjoyed on their own or used in a variety 
                    of recipes. Whether you're looking for a healthy snack or a delicious ingredient for your baked goods, our walnuts are a 
                    great choice. Packed with essential nutrients like omega-3 fatty acids, antioxidants, and vitamins, walnuts offer numerous 
                    health benefits and are a delicious addition to your diet.
                `,
                quality: `
                    Sourced from the best walnut farms, our walnuts are carefully selected and processed to ensure the highest quality and 
                    freshness. Each walnut is packed with essential nutrients and antioxidants, making them a healthy and flavorful snack 
                    option. Our walnuts are free from additives, preservatives, and artificial flavors, ensuring that you get nothing but 
                    pure, natural goodness in every bite. Whether you're enjoying them on their own or incorporating them into your favorite 
                    recipes, our walnuts are a nutritious and delicious choice.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737528990/walnuts-walnut-kernels-blue-background-high-quality-photo_lppdhn.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737528991/top-view-walnuts-black-basket-wooden-vertical_m1iuuh.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737528991/side-view-bowl-with-walnuts-rustic_nq8tpv.jpg"
                ]
            },
            "Apricots": {
                title: "Apricots – Premium Quality Apricots for Snacking and Baking",
                description: `
                    Our premium apricots are perfect for snacking, baking, and adding a natural sweetness to your dishes. Known for their 
                    rich, sweet flavor and chewy texture, apricots are a versatile dried fruit that can be enjoyed in a variety of ways. 
                    Whether you're looking for a healthy snack or a delicious ingredient for your recipes, our apricots are a great choice. 
                    Packed with essential nutrients like fiber, vitamins, and antioxidants, apricots offer numerous health benefits and are 
                    a delicious addition to your diet.
                `,
                quality: `
                    Sourced from the best orchards, our apricots are carefully selected and processed to ensure the highest quality and 
                    freshness. Each apricot is packed with essential nutrients and antioxidants, making them a healthy and flavorful snack 
                    option. Our apricots are free from additives, preservatives, and artificial flavors, ensuring that you get nothing but 
                    pure, natural goodness in every bite. Whether you're enjoying them on their own or incorporating them into your favorite 
                    recipes, our apricots are a nutritious and delicious choice.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737529815/apricots-with-dried-apricots-plate-plaster-picnic-cloth-flat-lay_it2ik9.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737529816/apricots-wicker-basket-wooden-table-flat-lay_anjcu6.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737529826/apricots-with-dried-apricots-colander-wooden-table-top-view_tx5g1p.jpg"
                ],

            },
            "Dates": {
                title: "Dates – Premium Quality Dates for Snacking and Baking",
                description: `
                    Our premium dates are perfect for snacking, baking, and adding natural sweetness to your dishes. Known for their rich, 
                    sweet flavor and chewy texture, dates are a versatile dried fruit that can be enjoyed in a variety of ways. Whether you're 
                    looking for a healthy snack or a delicious ingredient for your recipes, our dates are a great choice. Packed with essential 
                    nutrients like fiber, vitamins, and antioxidants, dates offer numerous health benefits and are a delicious addition to your diet.
                `,
                quality: `
                    Sourced from the best date farms, our dates are carefully selected and processed to ensure the highest quality and freshness. 
                    Each date is packed with essential nutrients and antioxidants, making them a healthy and flavorful snack option. Our dates are 
                    free from additives, preservatives, and artificial flavors, ensuring that you get nothing but pure, natural goodness in every bite. 
                    Whether you're enjoying them on their own or incorporating them into your favorite recipes, our dates are a nutritious and delicious 
                    choice.
                `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737530244/arabic-food-concept-ramadan_okrnrg.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737530243/ramadan-concept-with-some-dates_mwjipq.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737530238/various-dried-dates-kurma_sz9rtw.jpg"
                ]
            }
        },
    },
    Lentils: {
        title: "Lentils",
        description: "Explore our range of premium lentils, perfect for soups, stews, salads, and more.",
        quality: "Our lentils are sourced from the finest farms, ensuring freshness and superior taste.",
        items: {
            "Black Lentils": {
                title: "Black Lentils – Premium Quality Lentils for Soups, Stews, and Salads",
                description: `
                Our premium black lentils are perfect for adding a rich, earthy flavor to your favorite dishes. Known for their 
                distinctive color and nutty taste, black lentils are a versatile legume that can be enjoyed in a variety of ways. 
                Whether you're making soups, stews, salads, or side dishes, our black lentils are a great choice. Packed with essential 
                nutrients like protein, fiber, and vitamins, black lentils offer numerous health benefits and are a delicious addition 
                to your diet.
            `,
                quality: `
                Sourced from the best lentil farms, our black lentils are carefully selected and processed to ensure the highest quality 
                and freshness. Each lentil is packed with essential nutrients and antioxidants, making them a healthy and flavorful 
                ingredient. Our black lentils are free from additives, preservatives, and artificial flavors, ensuring that you get nothing 
                but pure, natural goodness in every bite. Whether you're making a hearty soup, a flavorful stew, or a refreshing salad, 
                our black lentils are a nutritious and delicious choice.
            `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737531519/black-beans_u6zkig.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737531519/black-beans_1_wg0tpo.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737531520/black-beans-white-small-bowl-place-dark-floor_acfof9.jpg"
                ]
            },
            "Green Lentils": {
                title: "Green Lentils – Premium Quality Lentils for Soups, Stews, and Salads",
                description: `
                Our premium green lentils are perfect for adding a rich, earthy flavor to your favorite dishes. Known for their 
                distinctive color and nutty taste, green lentils are a versatile legume that can be enjoyed in a variety of ways. 
                Whether you're making soups, stews, salads, or side dishes, our green lentils are a great choice. Packed with essential 
                nutrients like protein, fiber, and vitamins, green lentils offer numerous health benefits and are a delicious addition 
                to your diet.
            `,
                quality: `
                Sourced from the best lentil farms, our green lentils are carefully selected and processed to ensure the highest quality 
                and freshness. Each lentil is packed with essential nutrients and antioxidants, making them a healthy and flavorful 
                ingredient. Our green lentils are free from additives, preservatives, and artificial flavors, ensuring that you get nothing 
                but pure, natural goodness in every bite. Whether you're making a hearty soup, a flavorful stew, or a refreshing salad, 
                our green lentils are a nutritious and delicious choice.
            `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737532226/sprouts-seed-white-small-bowl_ys53hv.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737532226/sprouts-seed-wooden-small-bowl_pfcch6.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737532236/top-view-frame-with-seeds_upidq5.jpg"
                ]
            },
            "Red Lentils": {
                title: "Red Lentils – Premium Quality Lentils for Soups, Stews, and Salads",
                description: ` 
                Our premium red lentils are perfect for adding a rich, earthy flavor to your favorite dishes. Known for their
                distinctive color and nutty taste, red lentils are a versatile legume that can be enjoyed in a variety of ways.
                Whether you're making soups, stews, salads, or side dishes, our red lentils are a great choice. Packed with essential
                nutrients like protein, fiber, and vitamins, red lentils offer numerous health benefits and are a delicious addition
                to your diet.
            `,
                quality: `
                Sourced from the best lentil farms, our red lentils are carefully selected and processed to ensure the highest quality
                and freshness. Each lentil is packed with essential nutrients and antioxidants, making them a healthy and flavorful
                ingredient. Our red lentils are free from additives, preservatives, and artificial flavors, ensuring that you get nothing
                but pure, natural goodness in every bite. Whether you're making a hearty soup, a flavorful stew, or a refreshing salad,
                our red lentils are a nutritious and delicious choice.
            `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737532546/top-view-rich-vitamins-lentils-bowl-with-lentils-isolated-white-wall-with-copy-space_hin5z8.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737532541/wooden-bowls-red-raw-lentils-marble-table_niig6f.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737532540/top-up-view-raw-uncooked-red-lentils-bowl_kg2drh.jpg"
                ]
            },
            "Yellow Lentils": {
                title: "Yellow Lentils – Premium Quality Lentils for Soups, Stews, and Salads",
                description: `
                Our premium yellow lentils are perfect for adding a rich, earthy flavor to your favorite dishes. Known for their    
                distinctive color and nutty taste, yellow lentils are a versatile legume that can be enjoyed in a variety of ways.
                Whether you're making soups, stews, salads, or side dishes, our yellow lentils are a great choice. Packed with essential
                nutrients like protein, fiber, and vitamins, yellow lentils offer numerous health benefits and are a delicious addition
                to your diet.
            `,
                quality: `
                Sourced from the best lentil farms, our yellow lentils are carefully selected and processed to ensure the highest quality
                and freshness. Each lentil is packed with essential nutrients and antioxidants, making them a healthy and flavorful
                ingredient. Our yellow lentils are free from additives, preservatives, and artificial flavors, ensuring that you get nothing
                but pure, natural goodness in every bite. Whether you're making a hearty soup, a flavorful stew, or a refreshing salad,
                our yellow lentils are a nutritious and delicious choice.
            `,
                images: [
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737532790/soybean-seeds-wooden-floor-hemp-sacks-food-nutrition-concept_rlo8ev.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737532791/yellow-soy-beans_d4ho8v.jpg",
                    "https://res.cloudinary.com/dtivafy25/image/upload/v1737532793/soybean-seeds-wooden-floor-hemp-sacks-food-nutrition-concept_1_pjelah.jpg"
                ]
            },
        }
    },
};

export default categoryData;
