import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/Iocpag',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log('Data base is connected')
}).catch((err) => {
    console.error(err)    
});
