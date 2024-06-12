export const retailitems={
    "objects": [
      {
        "type": "DISCOUNT",
        "id": "SZIC3PCCHE24W3355WY3SWT4",
        "updated_at": "2022-11-26T06:30:22.141Z",
        "created_at": "2022-11-26T06:30:22.141Z",
        "version": 1669444222141,
        "is_deleted": false,
        "present_at_all_locations": true,
        "discount_data": {
          "name": "20% off your next purchase",
          "discount_type": "FIXED_PERCENTAGE",
          "percentage": "20.0"
        }
      },
      {
        "type": "PRODUCT_SET",
        "id": "RZEODRFH3OSSAHIO2VWZ2KYN",
        "updated_at": "2022-11-26T06:30:22.141Z",
        "created_at": "2022-11-26T06:30:22.141Z",
        "version": 1669444222141,
        "is_deleted": false,
        "present_at_all_locations": true,
        "product_set_data": {
          "name": "all products",
          "all_products": true
        }
      },
      {
        "type": "PRICING_RULE",
        "id": "QTZX5FZH2K4DH7JY2HWFUK6M",
        "updated_at": "2022-11-26T06:30:22.141Z",
        "created_at": "2022-11-26T06:30:22.141Z",
        "version": 1669444222141,
        "is_deleted": false,
        "present_at_all_locations": true,
        "pricing_rule_data": {
          "name": "20% off your next purchase",
          "discount_id": "SZIC3PCCHE24W3355WY3SWT4",
          "match_products_id": "RZEODRFH3OSSAHIO2VWZ2KYN",
          "application_mode": "ATTACHED",
          "discount_target_scope": "WHOLE_PURCHASE",
          "max_applications_per_attachment": 1
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "OPNU32J3BV2OPGYDW6DJVHOX",
        "updated_at": "2022-11-26T06:34:56.45Z",
        "created_at": "2022-11-26T06:34:56.45Z",
        "version": 1669444496450,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "BOOLEAN",
          "name": "Is Alcoholic",
          "description": "Enabling this toggle on an item indicates that it contains alcohol.",
          "source_application": {
            "application_id": "sq0idp-w46nJ_NCNDMSOywaCY0mwA",
            "name": "Square Online Store"
          },
          "allowed_object_types": [
            "ITEM"
          ],
          "seller_visibility": "SELLER_VISIBILITY_HIDDEN",
          "app_visibility": "APP_VISIBILITY_HIDDEN",
          "key": "is_alcoholic"
        }
      },
      {
        "type": "CUSTOM_ATTRIBUTE_DEFINITION",
        "id": "E6UV7JYRLQBKMBIYF2ODLFAI",
        "updated_at": "2022-11-26T06:34:56.667Z",
        "created_at": "2022-11-26T06:34:56.667Z",
        "version": 1669444496667,
        "is_deleted": false,
        "present_at_all_locations": true,
        "custom_attribute_definition_data": {
          "type": "STRING",
          "name": "Ecom Storefront Classic Site ID",
          "description": "Ecommerce bridge target storefront classic site ID. Used to create site-item associations after copying items.",
          "source_application": {
            "application_id": "sq0idp-w46nJ_NCNDMSOywaCY0mwA",
            "name": "Square Online Store"
          },
          "allowed_object_types": [
            "ITEM"
          ],
          "seller_visibility": "SELLER_VISIBILITY_HIDDEN",
          "app_visibility": "APP_VISIBILITY_HIDDEN",
          "string_config": {
            "enforce_uniqueness": false
          },
          "key": "ecom_target_classic_site_id"
        }
      },
      {
        "type": "CATEGORY",
        "id": "BBRUGT7UYGTZA6OLPGPPLWEW",
        "updated_at": "2023-04-12T13:35:07.668Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306507668,
        "is_deleted": false,
        "present_at_all_locations": true,
        "category_data": {
          "name": "Tea",
          "is_top_level": true
        }
      },
      {
        "type": "CATEGORY",
        "id": "3XUJW6GNSGPZVHZPVEHONXVQ",
        "updated_at": "2023-04-12T13:35:07.668Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306507668,
        "is_deleted": false,
        "present_at_all_locations": true,
        "category_data": {
          "name": "Coffee",
          "is_top_level": true
        }
      },
      {
        "type": "CATEGORY",
        "id": "CZJZBWYHEVPMJNETVTBBRFME",
        "updated_at": "2023-04-12T13:35:07.668Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306507668,
        "is_deleted": false,
        "present_at_all_locations": true,
        "category_data": {
          "name": "Chocolate",
          "is_top_level": true
        }
      },
      {
        "type": "ITEM",
        "id": "I73SWQ52MS3VPVNFBQXLBQBN",
        "updated_at": "2023-04-12T13:35:54.687Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306554687,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Chai Latte",
          "description": "Black tea with steamed milk and spices",
          "is_taxable": true,
          "category_id": "BBRUGT7UYGTZA6OLPGPPLWEW",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "QEZESCEXTNCUTHJVC7UQF7UC",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "I73SWQ52MS3VPVNFBQXLBQBN",
                "name": "Regular",
                "sku": "CHA-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 400,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Black tea with steamed milk and spices</p>",
          "description_plaintext": "Black tea with steamed milk and spices"
        }
      },
      {
        "type": "ITEM",
        "id": "BB5N7TDBNPQM4EC3RAPRR4MN",
        "updated_at": "2023-04-12T13:35:58.095Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306558095,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Latte",
          "description": "Espresso with steamed milk",
          "is_taxable": true,
          "category_id": "3XUJW6GNSGPZVHZPVEHONXVQ",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "W6O2IHU24FJ3A66KBDZG7S7D",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "BB5N7TDBNPQM4EC3RAPRR4MN",
                "name": "Regular",
                "sku": "LAT-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 350,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Espresso with steamed milk</p>",
          "description_plaintext": "Espresso with steamed milk"
        }
      },
      {
        "type": "ITEM",
        "id": "SJZMD2QZ2LJRKZFD4LMWIDPG",
        "updated_at": "2023-04-12T13:35:54.745Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306554745,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Americano",
          "description": "Espresso with hot water",
          "is_taxable": true,
          "category_id": "3XUJW6GNSGPZVHZPVEHONXVQ",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "5BNGXH5DRC2GNBQETX4VITRS",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "SJZMD2QZ2LJRKZFD4LMWIDPG",
                "name": "Regular",
                "sku": "AME-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 250,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Espresso with hot water</p>",
          "description_plaintext": "Espresso with hot water"
        }
      },
      {
        "type": "ITEM",
        "id": "6MHC6XJPWRHUVLBYDXQYXB5O",
        "updated_at": "2023-04-12T13:35:55.434Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306555434,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Mocha",
          "description": "Espresso with steamed milk chocolate syrup and whipped cream",
          "is_taxable": true,
          "category_id": "3XUJW6GNSGPZVHZPVEHONXVQ",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "5OTR7DVEYUJXNYLSJKF4AIF3",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "6MHC6XJPWRHUVLBYDXQYXB5O",
                "name": "Regular",
                "sku": "MOC-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 400,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Espresso with steamed milk chocolate syrup and whipped cream</p>",
          "description_plaintext": "Espresso with steamed milk chocolate syrup and whipped cream"
        }
      },
      {
        "type": "ITEM",
        "id": "XK3O7WLVKQAI544DF3GXR4WI",
        "updated_at": "2023-04-12T13:35:54.938Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306554938,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Double Espresso",
          "description": "Two shots of espresso",
          "is_taxable": true,
          "category_id": "3XUJW6GNSGPZVHZPVEHONXVQ",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "7XNH27PMTGZZWVHB7XWLB4PV",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "XK3O7WLVKQAI544DF3GXR4WI",
                "name": "None",
                "sku": "ESP-DOU-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 300,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QCUCTBJOFUR6PJH7MQZ4RYS5",
                    "item_option_value_id": "N267R4EJGLFVL36BDEGHWTTY"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QCUCTBJOFUR6PJH7MQZ4RYS5"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Two shots of espresso</p>",
          "description_plaintext": "Two shots of espresso"
        }
      },
      {
        "type": "ITEM",
        "id": "UZLSRTG3LXULYQPZCSE6ODGC",
        "updated_at": "2023-04-12T13:35:55.05Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306555050,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Iced Coffee",
          "description": "Chilled coffee with ice",
          "is_taxable": true,
          "category_id": "3XUJW6GNSGPZVHZPVEHONXVQ",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "AQI4VT6KQAK2HYCV5CWTQXBU",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "UZLSRTG3LXULYQPZCSE6ODGC",
                "name": "Regular",
                "sku": "ICD-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 250,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Chilled coffee with ice</p>",
          "description_plaintext": "Chilled coffee with ice"
        }
      },
      {
        "type": "ITEM",
        "id": "HSHQWFUA67O2PUVKCY5LDITB",
        "updated_at": "2023-04-12T13:35:54.87Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306554870,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Cold Brew",
          "description": "Chilled coffee brewed over 12 hours",
          "is_taxable": true,
          "category_id": "3XUJW6GNSGPZVHZPVEHONXVQ",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "QKIHJFX6S7O4HKCIOHJ4EXEM",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "HSHQWFUA67O2PUVKCY5LDITB",
                "name": "Regular",
                "sku": "CLD-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 350,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Chilled coffee brewed over 12 hours</p>",
          "description_plaintext": "Chilled coffee brewed over 12 hours"
        }
      },
      {
        "type": "ITEM",
        "id": "F4F6JQRDFFH77WAM4ZHCMZFL",
        "updated_at": "2023-04-12T13:35:59.76Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306559760,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Cappuccino",
          "description": "Espresso with steamed milk and foam",
          "is_taxable": true,
          "category_id": "3XUJW6GNSGPZVHZPVEHONXVQ",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "AQ2RFTX2H2NOVBG5ZZEYVXBL",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "F4F6JQRDFFH77WAM4ZHCMZFL",
                "name": "Regular",
                "sku": "CAP-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 350,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Espresso with steamed milk and foam</p>",
          "description_plaintext": "Espresso with steamed milk and foam"
        }
      },
      {
        "type": "ITEM",
        "id": "VDPJZHGSF2L6RU5TSTORGE2X",
        "updated_at": "2023-04-12T13:35:55.283Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306555283,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Single Espresso",
          "description": "A shot of espresso",
          "is_taxable": true,
          "category_id": "3XUJW6GNSGPZVHZPVEHONXVQ",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "CGCVMAUU7YSCBHOO6NL7GTXU",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "VDPJZHGSF2L6RU5TSTORGE2X",
                "name": "None",
                "sku": "ESP-SIN-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 200,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QCUCTBJOFUR6PJH7MQZ4RYS5",
                    "item_option_value_id": "N267R4EJGLFVL36BDEGHWTTY"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QCUCTBJOFUR6PJH7MQZ4RYS5"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>A shot of espresso</p>",
          "description_plaintext": "A shot of espresso"
        }
      },
      {
        "type": "ITEM",
        "id": "IDATX5GVK33Q2DEESQDPKNWN",
        "updated_at": "2023-04-12T13:35:55.115Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306555115,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Caramel Macchiato",
          "description": "Espresso with steamed milk and caramel syrup",
          "is_taxable": true,
          "category_id": "3XUJW6GNSGPZVHZPVEHONXVQ",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "BUUGZXFCZRZOGUBFKH373BJP",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "IDATX5GVK33Q2DEESQDPKNWN",
                "name": "Regular",
                "sku": "CAR-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 450,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Espresso with steamed milk and caramel syrup</p>",
          "description_plaintext": "Espresso with steamed milk and caramel syrup"
        }
      },
      {
        "type": "ITEM",
        "id": "WFN766M4HKZKOS4FQCXMDURQ",
        "updated_at": "2023-04-12T13:36:00.419Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306560419,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Green Tea Latte",
          "description": "Matcha green tea with steamed milk",
          "is_taxable": true,
          "category_id": "BBRUGT7UYGTZA6OLPGPPLWEW",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "5BGBZSKYHGFL243MY3XOVFEU",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "WFN766M4HKZKOS4FQCXMDURQ",
                "name": "Regular",
                "sku": "GRN-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 450,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Matcha green tea with steamed milk</p>",
          "description_plaintext": "Matcha green tea with steamed milk"
        }
      },
      {
        "type": "ITEM",
        "id": "RAXI5MBGLW644RHLBSO2F2UA",
        "updated_at": "2023-04-12T13:35:55.185Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306555185,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Herbal Tea",
          "description": "A selection of herbal tea",
          "is_taxable": true,
          "category_id": "BBRUGT7UYGTZA6OLPGPPLWEW",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "TIRNIPKJ7V6TDGZKXBEPREYX",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "RAXI5MBGLW644RHLBSO2F2UA",
                "name": "Peppermint",
                "sku": "HBL-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 250,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "VOE4KQDQE5M2P73WFKWBS6LU",
                    "item_option_value_id": "EM2GK52VGHE5F2EI3Z7LN2OT"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "VOE4KQDQE5M2P73WFKWBS6LU"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>A selection of herbal tea</p>",
          "description_plaintext": "A selection of herbal tea"
        }
      },
      {
        "type": "ITEM",
        "id": "WGTBPNDSH37QSYRHTJN4RDSN",
        "updated_at": "2023-04-12T13:35:55.362Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306555362,
        "is_deleted": false,
        "present_at_all_locations": false,
        "present_at_location_ids": [
          "0HH56E4D5RJ8D"
        ],
        "item_data": {
          "name": "Hot Chocolate",
          "description": "Hot chocolate with whipped cream",
          "is_taxable": true,
          "category_id": "CZJZBWYHEVPMJNETVTBBRFME",
          "variations": [
            {
              "type": "ITEM_VARIATION",
              "id": "P7SHQ3QVF7CIRERB3I3Q4E24",
              "updated_at": "2023-04-12T13:35:07.668Z",
              "created_at": "2023-04-12T13:35:07.668Z",
              "version": 1681306507668,
              "is_deleted": false,
              "present_at_all_locations": false,
              "present_at_location_ids": [
                "0HH56E4D5RJ8D"
              ],
              "item_variation_data": {
                "item_id": "WGTBPNDSH37QSYRHTJN4RDSN",
                "name": "Regular",
                "sku": "HOT-REG-001",
                "ordinal": 0,
                "pricing_type": "FIXED_PRICING",
                "price_money": {
                  "amount": 400,
                  "currency": "USD"
                },
                "item_option_values": [
                  {
                    "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                    "item_option_value_id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD"
                  }
                ],
                "sellable": true,
                "stockable": true
              }
            }
          ],
          "product_type": "REGULAR",
          "item_options": [
            {
              "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53"
            }
          ],
          "ecom_available": true,
          "ecom_visibility": "VISIBLE",
          "description_html": "<p>Hot chocolate with whipped cream</p>",
          "description_plaintext": "Hot chocolate with whipped cream"
        }
      },
      {
        "type": "ITEM_OPTION",
        "id": "QCUCTBJOFUR6PJH7MQZ4RYS5",
        "updated_at": "2023-04-12T13:36:50.718Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306610718,
        "is_deleted": false,
        "present_at_all_locations": true,
        "item_option_data": {
          "name": "None",
          "display_name": "None",
          "show_colors": false,
          "values": [
            {
              "type": "ITEM_OPTION_VAL",
              "id": "N267R4EJGLFVL36BDEGHWTTY",
              "version": 1681306507668,
              "item_option_value_data": {
                "item_option_id": "QCUCTBJOFUR6PJH7MQZ4RYS5",
                "name": "None",
                "ordinal": 0
              }
            }
          ]
        }
      },
      {
        "type": "ITEM_OPTION",
        "id": "VOE4KQDQE5M2P73WFKWBS6LU",
        "updated_at": "2023-04-12T13:36:40.685Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306600685,
        "is_deleted": false,
        "present_at_all_locations": true,
        "item_option_data": {
          "name": "Type",
          "display_name": "Type",
          "show_colors": false,
          "values": [
            {
              "type": "ITEM_OPTION_VAL",
              "id": "EM2GK52VGHE5F2EI3Z7LN2OT",
              "version": 1681306507668,
              "item_option_value_data": {
                "item_option_id": "VOE4KQDQE5M2P73WFKWBS6LU",
                "name": "Peppermint",
                "ordinal": 0
              }
            }
          ]
        }
      },
      {
        "type": "ITEM_OPTION",
        "id": "QMTQUALKCGAAJ62IORWQEJ53",
        "updated_at": "2023-04-12T13:37:01.07Z",
        "created_at": "2023-04-12T13:35:07.668Z",
        "version": 1681306621070,
        "is_deleted": false,
        "present_at_all_locations": true,
        "item_option_data": {
          "name": "Size",
          "display_name": "Size",
          "show_colors": false,
          "values": [
            {
              "type": "ITEM_OPTION_VAL",
              "id": "Y5RN4ZI6ZJTXHXRK5P5ZSMZD",
              "version": 1681306507668,
              "item_option_value_data": {
                "item_option_id": "QMTQUALKCGAAJ62IORWQEJ53",
                "name": "Regular",
                "ordinal": 0
              }
            }
          ]
        }
      }
    ]
  }