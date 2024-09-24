import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";

const ShopifyCollectionEmbed = () => {
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (!scriptAdded.current) {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        const client = ShopifyBuy.buildClient({
          domain: '193151-ec.myshopify.com',
          storefrontAccessToken: 'b9e90283c21a59ea48a2a8ac9e2fbad5',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: '291869556793',
            node: document.getElementById('collection-component-1717527803001'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px",
                      "width": "calc(25% - 20px)"
                    },
                    "img": {
                      "height": "calc(100% - 15px)",
                      "position": "absolute",
                      "left": "0",
                      "right": "0",
                      "top": "0"
                    },
                    "imgWrapper": {
                      "padding-top": "calc(75% + 15px)",
                      "position": "relative",
                      "height": "0"
                    }
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#353c33"
                    },
                    "background-color": "#1f231e",
                    ":focus": {
                      "background-color": "#353c33"
                    }
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px"
                    }
                  }
                }
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px"
                    }
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#353c33"
                    },
                    "background-color": "#1f231e",
                    ":focus": {
                      "background-color": "#353c33"
                    }
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "option": {},
              "cart": {
                "styles": {
                  "button": {
                    ":hover": {
                      "background-color": "#353c33"
                    },
                    "background-color": "#1f231e",
                    ":focus": {
                      "background-color": "#353c33"
                    }
                  }
                },
                "text": {
                  "total": "Subtotal",
                  "button": "Checkout"
                }
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "background-color": "#1f231e",
                    ":hover": {
                      "background-color": "#353c33"
                    },
                    ":focus": {
                      "background-color": "#353c33"
                    }
                  }
                }
              }
            },
          });
        });
      }

      scriptAdded.current = true;
    }
  }, []);

  const [isOpen4, setIsOpen4] = useState(false);
  const [modalContent, setModalContent] = useState({});
  function toggleModalFour(value) {
    setIsOpen4(!isOpen4);
    setModalContent(value);
  }

  return (
    <Fragment>
      <SectionContainer navName="news">
        <div className="section_inner">
          <div className="cavani_tm_news w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Purchase or Rent your Oud
              </span>
            </div>
            <div className="news_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="relative z-[2]">
                <div id='collection-component-1717527803001'></div>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};

export default ShopifyCollectionEmbed;
