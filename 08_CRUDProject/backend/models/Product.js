import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "상품명은 필수입니다."],
            trim: true

        },
        price: {
            type: Number,
            required: [true, "가격은 필수입니다."],
            min: [0, "가격은 0원 이상이어야 합니다."]
        },
    },
    {
        timestamps: true  // 입력시간이랑 수정시간이 자동으로 들어감
    }
)

const Product = mongoose.model("Product", productSchema)

export default Product