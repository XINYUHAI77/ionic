/**
 * Created by j on 2016/4/24.
 */
angular.module('starter.controllers', [])
    // Home controller
    .controller('HomeCtrl', function($scope, Product, $ionicNavBarDelegate) {
        // slider images
        $scope.slides = [
            {
                id:8,
                name: "国宝酒01",
                price: 30,
                sale_price: null,
                images: 'img/index_10.jpg'
            },
            {
                id:9,
                name: "国宝酒02",
                price: 30,
                sale_price: null,
                images: 'img/index_10.jpg'
            },
            {
                id:10,
                name: "国宝酒03",
                price: 30,
                sale_price: null,
                images: 'img/index_10.jpg'
            }
        ];
        $scope.quan = [
            {
                url: 'img/index_13.jpg',
                quan_price:50,
            },
            {
                url: 'img/index_15.jpg',
                quan_price:100,
            },

        ];
        // list products
        $scope.products = Product.all();
    })
    // Product detail controller
    .controller('DetailCtrl', function($scope,$stateParams, Product) {
        $scope.product = Product.get($stateParams.id);

        // generate array from number
        $scope.range = function(n) {
            return new Array(n);
        };
    })
    // Cart controller
    .controller('CartCtrl', function($scope,$ionicPopup) {
        $scope.carlst=[
            {
                id:8,
                name: "国宝酒01",
                price: 30,
                sale_price: 20,
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
                        content: "This product is good",
                        stars: 4
                    }
                ]

            },
            {
                id:9,
                name: "国宝酒02",
                price: 30,
                sale_price: 20,
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
                        content: "This product is good",
                        stars: 4
                    }
                ]
            },
            {
                id:10,
                name: "国宝酒03",
                price: 30,
                sale_price: null,
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
                        content: "This product is good",
                        stars: 4
                    }
                ]
            }
        ]
        $scope.remove=function(index){
            $scope.carlst.splice(index,1);
        }
        $scope.totalCart=function(){
            var total = 0;
            for(var i=0;i<$scope.carlst.length;i++){
                total = total + $scope.carlst[i].price
            }
            return total;
        };

        // 确认弹出框
        $scope.showConfirm = function(index) {
            $ionicPopup.confirm({
                    template: "确定删除？"
                })
                .then(function(res) {
                    if(res) {
                        $scope.remove()
                    }
                });
        };
})
    // Category controller
    .controller('CategoryCtrl', function($scope, Product) {
        $scope.products = Product.all();
    })
    .controller('AuthCtrl', function($scope, $ionicHistory) {
        // hide back butotn in next view
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
    });