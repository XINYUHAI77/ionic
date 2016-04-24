/**
 * Created by j on 2016/4/24.
 */
angular.module('starter.services', [])

    .factory('Product', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var products = [
            {
                id: 1,
                name: "企业定制",
                price: 30,
                sale_price: 20,
                thumb: "img/list/p_1.jpg",
                images: [
                    "img/detail/d_1.jpg",
                    "img/detail/d_2.jpg",
                    "img/detail/d_3.jpg"
                ],
                description: "贵州国宝酒业定制酒营销中心专注于提供白酒定制服务,可为企业提供商务,招待,宴请,礼品定制酒服务,同时也为个人提供婚宴，寿宴白酒定制服务，高端白酒定制中心用情服务，用心服务、以酒结交天下好友。商务专供",
                reviews: [
                    {
                        avatar: "img/avatar.jpg",
                        name: "Slimer",
                        content: "这个产品不错值得你购买",
                        stars: 4
                    }
                ]
            },
            {
                id: 2,
                name: "商务专供",
                price: 30,
                sale_price: null,
                thumb: "img/list/p_2.jpg",
                images: [
                    "img/detail/d_1.jpg",
                    "img/detail/d_2.jpg",
                    "img/detail/d_3.jpg"
                ]
            },
            {
                id: 3,
                name: "企业定制",
                price: 30,
                sale_price: null,
                thumb: "img/list/p_3.jpg",
                images: [
                    "img/detail/d_1.jpg",
                    "img/detail/d_2.jpg",
                    "img/detail/d_3.jpg"
                ]
            },
            {
                id: 4,
                name: "商务专供",
                price: 30,
                sale_price: 20,
                thumb: "img/list/p_4.jpg",
                images: [
                    "img/detail/d_1.jpg",
                    "img/detail/d_2.jpg",
                    "img/detail/d_3.jpg"
                ]
            },
            {
                id: 5,
                name: "企业定制",
                price: 30,
                sale_price: 20,
                thumb: "img/list/p_5.jpg",
                images: [
                    "img/detail/d_1.jpg",
                    "img/detail/d_2.jpg",
                    "img/detail/d_3.jpg"
                ]
            },
            {
                id: 6,
                name: "企业定制",
                price: 30,
                sale_price: null,
                thumb: "img/list/p_6.jpg",
                images: [
                    "img/detail/d_1.jpg",
                    "img/detail/d_2.jpg",
                    "img/detail/d_3.jpg"
                ]
            },
            {
                id:8,
                name: "国宝酒01",
                price: 30,
                sale_price: 20,
                thumb: "img/index_10.jpg",
                images:[
                    'img/index_10.jpg',
                    'img/index_10.jpg',
                    'img/index_10.jpg'
                ],
                description:"这个产品不错值得你购买",
                reviews: [
                    {
                        avatar: "img/avatar.jpg",
                        name: "Slimer",
                        content: "这个产品不错值得你购买",
                        stars: 4
                    }
                ]

            },
            {
                id:9,
                name: "国宝酒02",
                price: 30,
                sale_price: 20,
                thumb: "img/index_10.jpg",
                images:[
                    'img/index_10.jpg',
                    'img/index_10.jpg',
                    'img/index_10.jpg'
                ],
                description:"这个产品不错值得你购买",
                reviews: [
                    {
                        avatar: "img/avatar.jpg",
                        name: "Slimer",
                        content: "这个产品不错值得你购买",
                        stars: 4
                    }
                ]
            },
            {
                id:10,
                name: "国宝酒03",
                price: 30,
                sale_price: null,
                thumb: "img/index_10.jpg",
                images:[
                    'img/index_10.jpg',
                    'img/index_10.jpg',
                    'img/index_10.jpg'
                ],
                description:"这个产品不错值得你购买",
                reviews: [
                    {
                        avatar: "img/avatar.jpg",
                        name: "Slimer",
                        content: "这个产品不错值得你购买",
                        stars: 4
                    }
                ]
            }
        ];

        return {
            all: function() {
                return products;
            },
            get: function(productId) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].id === parseInt(productId)) {
                        return products[i];
                    }
                }
                return null;
            }
        };
    });
