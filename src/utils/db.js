import mongoose from "mongoose";


const connect = async () => {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(process.env.MONGO , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        // await mongoose.connect("mongodb+srv://phdbui:<d93P61Q5rjiWwwVf>@cluster0.uo9x8xr.mongodb.net/?retryWrites=true&w=majority");
        // console.log("connected!");
        
    } catch(error) {
        throw new Error("Connect failed!");
    }
}

export default connect;