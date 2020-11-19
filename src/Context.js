import React, {Component} from 'react';
import {detailProduct, storeProducts} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state={
        products: [],
        detailedProduct:{},
        cart:[],
        isModalOpen:false,
        modalProduct:{},
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0,
        purchaseMode:true
    };

    // Setting Products

    componentDidMount() {
        this.setProducts();
    };

    setProducts = ()=>{
      let tempProducts = [];
      storeProducts.forEach(item=>{
          let singleItem = {...item};
          tempProducts = [...tempProducts,singleItem]
      });
        this.setState(()=>{
            return{
                products: tempProducts
            }
        })
    };

    getItem = id =>{
      const item = this.state.products.find(item => item.id === id);
        return item
    };

    // Details

    handleDetail = (id) =>{
        const product = this.getItem(id);

        this.setState(()=>{
            return{
                detailedProduct:product
            }
        })
    };

    addToCart = (id) =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(()=>{
            return{
                products: tempProducts,
                cart:[...this.state.cart,product]
            }
        },()=>{this.addToTotals()})
    };

    // Modal

    openModal = (id)=>{

        const product = this.getItem(id);
        this.setState(()=>{
            return{
                isModalOpen:true,
                modalProduct: product
            }
        })
    };

    closeModal = () =>{
        this.setState(()=>{
            return{
                isModalOpen:false
            }
        })
    };

    // CART

    increment = (id) =>{

        const cartItems = [...this.state.cart];
        cartItems.map(item=>{
           if(item.id === id){
              let count =  item.count +=1;
               item.total = item.price* count;
               this.setState(()=>{
                   return{
                       cart:cartItems
                   }
               },()=>{this.addToTotals()})
           }
        });
    };


    decrement = (id) =>{
        const cartItems = [...this.state.cart];
        cartItems.map(item => {
            if(item.id === id){
                let count =  item.count -=1;
                if(count === 0){

                    this.removeItem(id);
                }else{
                    item.total = item.price* count;
                    this.setState(()=>{
                        return{
                            cart:cartItems
                        }
                    },()=>{this.addToTotals()})
                }
            }
        });
    };

    removeItem = (id) =>{

        console.log(typeof id);
        const tempProducts = [...this.state.products];
        const cartItems = [...this.state.cart];

        const tempCart = cartItems.filter(item=>item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total =0;

        this.setState(()=>{
            return{
                cart:tempCart,
                products: tempProducts
            }
        },()=>{this.addToTotals()})

    };

    clearCart = () =>{
      this.setState(()=>{
          return{
              cart:[]
          }
      },()=>this.setProducts(), this.addToTotals())
    };

    addToTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item=>subTotal += item.total);
        const tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal +tax;
        this.setState(()=>{
            return{
                cartSubtotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    };

    purchaseModalOpen = () =>{

        this.setState(()=>{
            return{
                purchaseMode:true
            }
        })
    };

    purchaseModalClose = ()=>{
        this.setState(()=>{
            return{
                purchaseMode:false
            }
        },()=>this.clearCart())
    };



    render() {
        return (
            <ProductContext.Provider value={{...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment: this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,
                purchaseModalOpen:this.purchaseModalOpen,
                purchaseModalClose:this.purchaseModalClose
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
