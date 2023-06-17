import asyncHandler from '../middleware/asyncHandler.js'
import Order from '../model/orderModel.js'


// @desc Create new Order
// @route Post /api/orders
// @access Private
const addOrderItems = asyncHandler (async(req,res) =>{
    
    const {orderItems, shippingAddress, paymentMethod, itemsPrice,taxPrice,shippingPrice,totalPrice} = req.body;

    if(orderItems && orderItems.length === 0)
    {
        res.status(400);
        throw new Error('No Order Items');
    }
    else{
        const order = new Order({
            orderItems : orderItems.map((x)=> ({
                ...x,
                product : x._id,
                _id : undefined
            })),
            user : req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    }

    
});



// @desc Get Logged In user orders
// @route GET  /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler (async(req,res) =>{
    const orders = await Order.find({user : req.user._id});
    res.status(200).json(orders);
});


// @desc Get order by ID
// @route GET  /api/orders/:id
// @access Private
const getOrderById = asyncHandler (async(req,res) =>{
    const order = await Order.findById(req.params.id).populate('user','name email');

    if(order)
    {
        res.status(200).json(order);
    }
    else{
        res.status(404);
        throw new Error('Order Not Found');
    }
});


// @desc Update order to paid
// @route PUT  /api/orders/:id/paid
// @access Private
const updateOrderToPaid = asyncHandler (async(req,res) =>{
     const order = await Order.findById(req.params.id);

     if(order){
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id : req.body.status,
            update_time : req.body.update_time,
            email_address : req.body.payer.email_address,
        };

        const updatedOrder = await order.save();

        res.status(200).json(updatedOrder);
     }
     else{
        res.status(404);
        throw new Error('Order not found');
     }
});


// @desc Update order to delivered
// @route PUT  /api/orders/:id/delivered
// @access Private
const updateOrderToDelivered = asyncHandler (async(req,res) =>{
    res.send('Update order to Delivered');
});


// @desc GET all orders
// @route GET  /api/orders
// @access Private/admin
const getOrders = asyncHandler (async(req,res) =>{
    res.send('Get All Order');
});


export {addOrderItems,getMyOrders,getOrderById,updateOrderToPaid,updateOrderToDelivered,getOrders};