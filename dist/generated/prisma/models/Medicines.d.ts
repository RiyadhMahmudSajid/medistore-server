import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Medicines
 *
 */
export type MedicinesModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicinesPayload>;
export type AggregateMedicines = {
    _count: MedicinesCountAggregateOutputType | null;
    _avg: MedicinesAvgAggregateOutputType | null;
    _sum: MedicinesSumAggregateOutputType | null;
    _min: MedicinesMinAggregateOutputType | null;
    _max: MedicinesMaxAggregateOutputType | null;
};
export type MedicinesAvgAggregateOutputType = {
    price: number | null;
    stock: number | null;
    views: number | null;
};
export type MedicinesSumAggregateOutputType = {
    price: number | null;
    stock: number | null;
    views: number | null;
};
export type MedicinesMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    stock: number | null;
    manufacturer: string | null;
    image: string | null;
    categoryId: string | null;
    views: number | null;
    sellerId: string | null;
};
export type MedicinesMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    stock: number | null;
    manufacturer: string | null;
    image: string | null;
    categoryId: string | null;
    views: number | null;
    sellerId: string | null;
};
export type MedicinesCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    stock: number;
    manufacturer: number;
    image: number;
    categoryId: number;
    views: number;
    sellerId: number;
    _all: number;
};
export type MedicinesAvgAggregateInputType = {
    price?: true;
    stock?: true;
    views?: true;
};
export type MedicinesSumAggregateInputType = {
    price?: true;
    stock?: true;
    views?: true;
};
export type MedicinesMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    stock?: true;
    manufacturer?: true;
    image?: true;
    categoryId?: true;
    views?: true;
    sellerId?: true;
};
export type MedicinesMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    stock?: true;
    manufacturer?: true;
    image?: true;
    categoryId?: true;
    views?: true;
    sellerId?: true;
};
export type MedicinesCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    stock?: true;
    manufacturer?: true;
    image?: true;
    categoryId?: true;
    views?: true;
    sellerId?: true;
    _all?: true;
};
export type MedicinesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to aggregate.
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Prisma.MedicinesOrderByWithRelationInput | Prisma.MedicinesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MedicinesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Medicines
    **/
    _count?: true | MedicinesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MedicinesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MedicinesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MedicinesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MedicinesMaxAggregateInputType;
};
export type GetMedicinesAggregateType<T extends MedicinesAggregateArgs> = {
    [P in keyof T & keyof AggregateMedicines]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedicines[P]> : Prisma.GetScalarType<T[P], AggregateMedicines[P]>;
};
export type MedicinesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicinesWhereInput;
    orderBy?: Prisma.MedicinesOrderByWithAggregationInput | Prisma.MedicinesOrderByWithAggregationInput[];
    by: Prisma.MedicinesScalarFieldEnum[] | Prisma.MedicinesScalarFieldEnum;
    having?: Prisma.MedicinesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicinesCountAggregateInputType | true;
    _avg?: MedicinesAvgAggregateInputType;
    _sum?: MedicinesSumAggregateInputType;
    _min?: MedicinesMinAggregateInputType;
    _max?: MedicinesMaxAggregateInputType;
};
export type MedicinesGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    manufacturer: string;
    image: string;
    categoryId: string;
    views: number;
    sellerId: string;
    _count: MedicinesCountAggregateOutputType | null;
    _avg: MedicinesAvgAggregateOutputType | null;
    _sum: MedicinesSumAggregateOutputType | null;
    _min: MedicinesMinAggregateOutputType | null;
    _max: MedicinesMaxAggregateOutputType | null;
};
type GetMedicinesGroupByPayload<T extends MedicinesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicinesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicinesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicinesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicinesGroupByOutputType[P]>;
}>>;
export type MedicinesWhereInput = {
    AND?: Prisma.MedicinesWhereInput | Prisma.MedicinesWhereInput[];
    OR?: Prisma.MedicinesWhereInput[];
    NOT?: Prisma.MedicinesWhereInput | Prisma.MedicinesWhereInput[];
    id?: Prisma.StringFilter<"Medicines"> | string;
    name?: Prisma.StringFilter<"Medicines"> | string;
    description?: Prisma.StringFilter<"Medicines"> | string;
    price?: Prisma.FloatFilter<"Medicines"> | number;
    stock?: Prisma.IntFilter<"Medicines"> | number;
    manufacturer?: Prisma.StringFilter<"Medicines"> | string;
    image?: Prisma.StringFilter<"Medicines"> | string;
    categoryId?: Prisma.StringFilter<"Medicines"> | string;
    views?: Prisma.IntFilter<"Medicines"> | number;
    sellerId?: Prisma.StringFilter<"Medicines"> | string;
    category?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.CategoriesWhereInput>;
    seller?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reviews?: Prisma.ReviewsListRelationFilter;
    orderItem?: Prisma.OrderItemListRelationFilter;
};
export type MedicinesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    category?: Prisma.CategoriesOrderByWithRelationInput;
    seller?: Prisma.UserOrderByWithRelationInput;
    reviews?: Prisma.ReviewsOrderByRelationAggregateInput;
    orderItem?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type MedicinesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MedicinesWhereInput | Prisma.MedicinesWhereInput[];
    OR?: Prisma.MedicinesWhereInput[];
    NOT?: Prisma.MedicinesWhereInput | Prisma.MedicinesWhereInput[];
    name?: Prisma.StringFilter<"Medicines"> | string;
    description?: Prisma.StringFilter<"Medicines"> | string;
    price?: Prisma.FloatFilter<"Medicines"> | number;
    stock?: Prisma.IntFilter<"Medicines"> | number;
    manufacturer?: Prisma.StringFilter<"Medicines"> | string;
    image?: Prisma.StringFilter<"Medicines"> | string;
    categoryId?: Prisma.StringFilter<"Medicines"> | string;
    views?: Prisma.IntFilter<"Medicines"> | number;
    sellerId?: Prisma.StringFilter<"Medicines"> | string;
    category?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.CategoriesWhereInput>;
    seller?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reviews?: Prisma.ReviewsListRelationFilter;
    orderItem?: Prisma.OrderItemListRelationFilter;
}, "id">;
export type MedicinesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    _count?: Prisma.MedicinesCountOrderByAggregateInput;
    _avg?: Prisma.MedicinesAvgOrderByAggregateInput;
    _max?: Prisma.MedicinesMaxOrderByAggregateInput;
    _min?: Prisma.MedicinesMinOrderByAggregateInput;
    _sum?: Prisma.MedicinesSumOrderByAggregateInput;
};
export type MedicinesScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicinesScalarWhereWithAggregatesInput | Prisma.MedicinesScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicinesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicinesScalarWhereWithAggregatesInput | Prisma.MedicinesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    price?: Prisma.FloatWithAggregatesFilter<"Medicines"> | number;
    stock?: Prisma.IntWithAggregatesFilter<"Medicines"> | number;
    manufacturer?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    image?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    views?: Prisma.IntWithAggregatesFilter<"Medicines"> | number;
    sellerId?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
};
export type MedicinesCreateInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    views?: number;
    category: Prisma.CategoriesCreateNestedOneWithoutMedicinesInput;
    seller: Prisma.UserCreateNestedOneWithoutSellerInput;
    reviews?: Prisma.ReviewsCreateNestedManyWithoutMedicineInput;
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutMedicineInput;
};
export type MedicinesUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    categoryId: string;
    views?: number;
    sellerId: string;
    reviews?: Prisma.ReviewsUncheckedCreateNestedManyWithoutMedicineInput;
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMedicineInput;
};
export type MedicinesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.CategoriesUpdateOneRequiredWithoutMedicinesNestedInput;
    seller?: Prisma.UserUpdateOneRequiredWithoutSellerNestedInput;
    reviews?: Prisma.ReviewsUpdateManyWithoutMedicineNestedInput;
    orderItem?: Prisma.OrderItemUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviews?: Prisma.ReviewsUncheckedUpdateManyWithoutMedicineNestedInput;
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    categoryId: string;
    views?: number;
    sellerId: string;
};
export type MedicinesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MedicinesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MedicinesListRelationFilter = {
    every?: Prisma.MedicinesWhereInput;
    some?: Prisma.MedicinesWhereInput;
    none?: Prisma.MedicinesWhereInput;
};
export type MedicinesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MedicinesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
};
export type MedicinesAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
};
export type MedicinesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
};
export type MedicinesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
};
export type MedicinesSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    views?: Prisma.SortOrder;
};
export type MedicinesScalarRelationFilter = {
    is?: Prisma.MedicinesWhereInput;
    isNot?: Prisma.MedicinesWhereInput;
};
export type MedicinesCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoryInput, Prisma.MedicinesUncheckedCreateWithoutCategoryInput> | Prisma.MedicinesCreateWithoutCategoryInput[] | Prisma.MedicinesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutCategoryInput | Prisma.MedicinesCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.MedicinesCreateManyCategoryInputEnvelope;
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
};
export type MedicinesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoryInput, Prisma.MedicinesUncheckedCreateWithoutCategoryInput> | Prisma.MedicinesCreateWithoutCategoryInput[] | Prisma.MedicinesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutCategoryInput | Prisma.MedicinesCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.MedicinesCreateManyCategoryInputEnvelope;
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
};
export type MedicinesUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoryInput, Prisma.MedicinesUncheckedCreateWithoutCategoryInput> | Prisma.MedicinesCreateWithoutCategoryInput[] | Prisma.MedicinesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutCategoryInput | Prisma.MedicinesCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.MedicinesUpsertWithWhereUniqueWithoutCategoryInput | Prisma.MedicinesUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.MedicinesCreateManyCategoryInputEnvelope;
    set?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    disconnect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    delete?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    update?: Prisma.MedicinesUpdateWithWhereUniqueWithoutCategoryInput | Prisma.MedicinesUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.MedicinesUpdateManyWithWhereWithoutCategoryInput | Prisma.MedicinesUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
};
export type MedicinesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoryInput, Prisma.MedicinesUncheckedCreateWithoutCategoryInput> | Prisma.MedicinesCreateWithoutCategoryInput[] | Prisma.MedicinesUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutCategoryInput | Prisma.MedicinesCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.MedicinesUpsertWithWhereUniqueWithoutCategoryInput | Prisma.MedicinesUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.MedicinesCreateManyCategoryInputEnvelope;
    set?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    disconnect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    delete?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    update?: Prisma.MedicinesUpdateWithWhereUniqueWithoutCategoryInput | Prisma.MedicinesUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.MedicinesUpdateManyWithWhereWithoutCategoryInput | Prisma.MedicinesUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MedicinesCreateNestedOneWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutOrderItemInput, Prisma.MedicinesUncheckedCreateWithoutOrderItemInput>;
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutOrderItemInput;
    connect?: Prisma.MedicinesWhereUniqueInput;
};
export type MedicinesUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutOrderItemInput, Prisma.MedicinesUncheckedCreateWithoutOrderItemInput>;
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutOrderItemInput;
    upsert?: Prisma.MedicinesUpsertWithoutOrderItemInput;
    connect?: Prisma.MedicinesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicinesUpdateToOneWithWhereWithoutOrderItemInput, Prisma.MedicinesUpdateWithoutOrderItemInput>, Prisma.MedicinesUncheckedUpdateWithoutOrderItemInput>;
};
export type MedicinesCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutReviewsInput, Prisma.MedicinesUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.MedicinesWhereUniqueInput;
};
export type MedicinesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutReviewsInput, Prisma.MedicinesUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.MedicinesUpsertWithoutReviewsInput;
    connect?: Prisma.MedicinesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicinesUpdateToOneWithWhereWithoutReviewsInput, Prisma.MedicinesUpdateWithoutReviewsInput>, Prisma.MedicinesUncheckedUpdateWithoutReviewsInput>;
};
export type MedicinesCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutSellerInput, Prisma.MedicinesUncheckedCreateWithoutSellerInput> | Prisma.MedicinesCreateWithoutSellerInput[] | Prisma.MedicinesUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutSellerInput | Prisma.MedicinesCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.MedicinesCreateManySellerInputEnvelope;
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
};
export type MedicinesUncheckedCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutSellerInput, Prisma.MedicinesUncheckedCreateWithoutSellerInput> | Prisma.MedicinesCreateWithoutSellerInput[] | Prisma.MedicinesUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutSellerInput | Prisma.MedicinesCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.MedicinesCreateManySellerInputEnvelope;
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
};
export type MedicinesUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutSellerInput, Prisma.MedicinesUncheckedCreateWithoutSellerInput> | Prisma.MedicinesCreateWithoutSellerInput[] | Prisma.MedicinesUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutSellerInput | Prisma.MedicinesCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.MedicinesUpsertWithWhereUniqueWithoutSellerInput | Prisma.MedicinesUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.MedicinesCreateManySellerInputEnvelope;
    set?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    disconnect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    delete?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    update?: Prisma.MedicinesUpdateWithWhereUniqueWithoutSellerInput | Prisma.MedicinesUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.MedicinesUpdateManyWithWhereWithoutSellerInput | Prisma.MedicinesUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
};
export type MedicinesUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutSellerInput, Prisma.MedicinesUncheckedCreateWithoutSellerInput> | Prisma.MedicinesCreateWithoutSellerInput[] | Prisma.MedicinesUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutSellerInput | Prisma.MedicinesCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.MedicinesUpsertWithWhereUniqueWithoutSellerInput | Prisma.MedicinesUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.MedicinesCreateManySellerInputEnvelope;
    set?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    disconnect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    delete?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    update?: Prisma.MedicinesUpdateWithWhereUniqueWithoutSellerInput | Prisma.MedicinesUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.MedicinesUpdateManyWithWhereWithoutSellerInput | Prisma.MedicinesUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
};
export type MedicinesCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    views?: number;
    seller: Prisma.UserCreateNestedOneWithoutSellerInput;
    reviews?: Prisma.ReviewsCreateNestedManyWithoutMedicineInput;
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutMedicineInput;
};
export type MedicinesUncheckedCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    views?: number;
    sellerId: string;
    reviews?: Prisma.ReviewsUncheckedCreateNestedManyWithoutMedicineInput;
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMedicineInput;
};
export type MedicinesCreateOrConnectWithoutCategoryInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoryInput, Prisma.MedicinesUncheckedCreateWithoutCategoryInput>;
};
export type MedicinesCreateManyCategoryInputEnvelope = {
    data: Prisma.MedicinesCreateManyCategoryInput | Prisma.MedicinesCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type MedicinesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicinesUpdateWithoutCategoryInput, Prisma.MedicinesUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoryInput, Prisma.MedicinesUncheckedCreateWithoutCategoryInput>;
};
export type MedicinesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateWithoutCategoryInput, Prisma.MedicinesUncheckedUpdateWithoutCategoryInput>;
};
export type MedicinesUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.MedicinesScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateManyMutationInput, Prisma.MedicinesUncheckedUpdateManyWithoutCategoryInput>;
};
export type MedicinesScalarWhereInput = {
    AND?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
    OR?: Prisma.MedicinesScalarWhereInput[];
    NOT?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
    id?: Prisma.StringFilter<"Medicines"> | string;
    name?: Prisma.StringFilter<"Medicines"> | string;
    description?: Prisma.StringFilter<"Medicines"> | string;
    price?: Prisma.FloatFilter<"Medicines"> | number;
    stock?: Prisma.IntFilter<"Medicines"> | number;
    manufacturer?: Prisma.StringFilter<"Medicines"> | string;
    image?: Prisma.StringFilter<"Medicines"> | string;
    categoryId?: Prisma.StringFilter<"Medicines"> | string;
    views?: Prisma.IntFilter<"Medicines"> | number;
    sellerId?: Prisma.StringFilter<"Medicines"> | string;
};
export type MedicinesCreateWithoutOrderItemInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    views?: number;
    category: Prisma.CategoriesCreateNestedOneWithoutMedicinesInput;
    seller: Prisma.UserCreateNestedOneWithoutSellerInput;
    reviews?: Prisma.ReviewsCreateNestedManyWithoutMedicineInput;
};
export type MedicinesUncheckedCreateWithoutOrderItemInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    categoryId: string;
    views?: number;
    sellerId: string;
    reviews?: Prisma.ReviewsUncheckedCreateNestedManyWithoutMedicineInput;
};
export type MedicinesCreateOrConnectWithoutOrderItemInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutOrderItemInput, Prisma.MedicinesUncheckedCreateWithoutOrderItemInput>;
};
export type MedicinesUpsertWithoutOrderItemInput = {
    update: Prisma.XOR<Prisma.MedicinesUpdateWithoutOrderItemInput, Prisma.MedicinesUncheckedUpdateWithoutOrderItemInput>;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutOrderItemInput, Prisma.MedicinesUncheckedCreateWithoutOrderItemInput>;
    where?: Prisma.MedicinesWhereInput;
};
export type MedicinesUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: Prisma.MedicinesWhereInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateWithoutOrderItemInput, Prisma.MedicinesUncheckedUpdateWithoutOrderItemInput>;
};
export type MedicinesUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.CategoriesUpdateOneRequiredWithoutMedicinesNestedInput;
    seller?: Prisma.UserUpdateOneRequiredWithoutSellerNestedInput;
    reviews?: Prisma.ReviewsUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesUncheckedUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviews?: Prisma.ReviewsUncheckedUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    views?: number;
    category: Prisma.CategoriesCreateNestedOneWithoutMedicinesInput;
    seller: Prisma.UserCreateNestedOneWithoutSellerInput;
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutMedicineInput;
};
export type MedicinesUncheckedCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    categoryId: string;
    views?: number;
    sellerId: string;
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMedicineInput;
};
export type MedicinesCreateOrConnectWithoutReviewsInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutReviewsInput, Prisma.MedicinesUncheckedCreateWithoutReviewsInput>;
};
export type MedicinesUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.MedicinesUpdateWithoutReviewsInput, Prisma.MedicinesUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutReviewsInput, Prisma.MedicinesUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.MedicinesWhereInput;
};
export type MedicinesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.MedicinesWhereInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateWithoutReviewsInput, Prisma.MedicinesUncheckedUpdateWithoutReviewsInput>;
};
export type MedicinesUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.CategoriesUpdateOneRequiredWithoutMedicinesNestedInput;
    seller?: Prisma.UserUpdateOneRequiredWithoutSellerNestedInput;
    orderItem?: Prisma.OrderItemUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesCreateWithoutSellerInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    views?: number;
    category: Prisma.CategoriesCreateNestedOneWithoutMedicinesInput;
    reviews?: Prisma.ReviewsCreateNestedManyWithoutMedicineInput;
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutMedicineInput;
};
export type MedicinesUncheckedCreateWithoutSellerInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    categoryId: string;
    views?: number;
    reviews?: Prisma.ReviewsUncheckedCreateNestedManyWithoutMedicineInput;
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMedicineInput;
};
export type MedicinesCreateOrConnectWithoutSellerInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutSellerInput, Prisma.MedicinesUncheckedCreateWithoutSellerInput>;
};
export type MedicinesCreateManySellerInputEnvelope = {
    data: Prisma.MedicinesCreateManySellerInput | Prisma.MedicinesCreateManySellerInput[];
    skipDuplicates?: boolean;
};
export type MedicinesUpsertWithWhereUniqueWithoutSellerInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicinesUpdateWithoutSellerInput, Prisma.MedicinesUncheckedUpdateWithoutSellerInput>;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutSellerInput, Prisma.MedicinesUncheckedCreateWithoutSellerInput>;
};
export type MedicinesUpdateWithWhereUniqueWithoutSellerInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateWithoutSellerInput, Prisma.MedicinesUncheckedUpdateWithoutSellerInput>;
};
export type MedicinesUpdateManyWithWhereWithoutSellerInput = {
    where: Prisma.MedicinesScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateManyMutationInput, Prisma.MedicinesUncheckedUpdateManyWithoutSellerInput>;
};
export type MedicinesCreateManyCategoryInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    views?: number;
    sellerId: string;
};
export type MedicinesUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    seller?: Prisma.UserUpdateOneRequiredWithoutSellerNestedInput;
    reviews?: Prisma.ReviewsUpdateManyWithoutMedicineNestedInput;
    orderItem?: Prisma.OrderItemUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviews?: Prisma.ReviewsUncheckedUpdateManyWithoutMedicineNestedInput;
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MedicinesCreateManySellerInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    manufacturer: string;
    image: string;
    categoryId: string;
    views?: number;
};
export type MedicinesUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.CategoriesUpdateOneRequiredWithoutMedicinesNestedInput;
    reviews?: Prisma.ReviewsUpdateManyWithoutMedicineNestedInput;
    orderItem?: Prisma.OrderItemUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesUncheckedUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.ReviewsUncheckedUpdateManyWithoutMedicineNestedInput;
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutMedicineNestedInput;
};
export type MedicinesUncheckedUpdateManyWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    views?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type MedicinesCountOutputType
 */
export type MedicinesCountOutputType = {
    reviews: number;
    orderItem: number;
};
export type MedicinesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviews?: boolean | MedicinesCountOutputTypeCountReviewsArgs;
    orderItem?: boolean | MedicinesCountOutputTypeCountOrderItemArgs;
};
/**
 * MedicinesCountOutputType without action
 */
export type MedicinesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinesCountOutputType
     */
    select?: Prisma.MedicinesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MedicinesCountOutputType without action
 */
export type MedicinesCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewsWhereInput;
};
/**
 * MedicinesCountOutputType without action
 */
export type MedicinesCountOutputTypeCountOrderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type MedicinesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    stock?: boolean;
    manufacturer?: boolean;
    image?: boolean;
    categoryId?: boolean;
    views?: boolean;
    sellerId?: boolean;
    category?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviews?: boolean | Prisma.Medicines$reviewsArgs<ExtArgs>;
    orderItem?: boolean | Prisma.Medicines$orderItemArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicinesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medicines"]>;
export type MedicinesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    stock?: boolean;
    manufacturer?: boolean;
    image?: boolean;
    categoryId?: boolean;
    views?: boolean;
    sellerId?: boolean;
    category?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medicines"]>;
export type MedicinesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    stock?: boolean;
    manufacturer?: boolean;
    image?: boolean;
    categoryId?: boolean;
    views?: boolean;
    sellerId?: boolean;
    category?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medicines"]>;
export type MedicinesSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    stock?: boolean;
    manufacturer?: boolean;
    image?: boolean;
    categoryId?: boolean;
    views?: boolean;
    sellerId?: boolean;
};
export type MedicinesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "price" | "stock" | "manufacturer" | "image" | "categoryId" | "views" | "sellerId", ExtArgs["result"]["medicines"]>;
export type MedicinesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviews?: boolean | Prisma.Medicines$reviewsArgs<ExtArgs>;
    orderItem?: boolean | Prisma.Medicines$orderItemArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicinesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MedicinesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MedicinesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MedicinesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Medicines";
    objects: {
        category: Prisma.$CategoriesPayload<ExtArgs>;
        seller: Prisma.$UserPayload<ExtArgs>;
        reviews: Prisma.$ReviewsPayload<ExtArgs>[];
        orderItem: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        stock: number;
        manufacturer: string;
        image: string;
        categoryId: string;
        views: number;
        sellerId: string;
    }, ExtArgs["result"]["medicines"]>;
    composites: {};
};
export type MedicinesGetPayload<S extends boolean | null | undefined | MedicinesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicinesPayload, S>;
export type MedicinesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MedicinesCountAggregateInputType | true;
};
export interface MedicinesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Medicines'];
        meta: {
            name: 'Medicines';
        };
    };
    /**
     * Find zero or one Medicines that matches the filter.
     * @param {MedicinesFindUniqueArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicinesFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicinesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Medicines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicinesFindUniqueOrThrowArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicinesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesFindFirstArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicinesFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicinesFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Medicines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesFindFirstOrThrowArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicinesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicinesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicines.findMany()
     *
     * // Get first 10 Medicines
     * const medicines = await prisma.medicines.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const medicinesWithIdOnly = await prisma.medicines.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MedicinesFindManyArgs>(args?: Prisma.SelectSubset<T, MedicinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Medicines.
     * @param {MedicinesCreateArgs} args - Arguments to create a Medicines.
     * @example
     * // Create one Medicines
     * const Medicines = await prisma.medicines.create({
     *   data: {
     *     // ... data to create a Medicines
     *   }
     * })
     *
     */
    create<T extends MedicinesCreateArgs>(args: Prisma.SelectSubset<T, MedicinesCreateArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Medicines.
     * @param {MedicinesCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicines = await prisma.medicines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MedicinesCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicinesCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicines = await prisma.medicines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Medicines and only return the `id`
     * const medicinesWithIdOnly = await prisma.medicines.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MedicinesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MedicinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Medicines.
     * @param {MedicinesDeleteArgs} args - Arguments to delete one Medicines.
     * @example
     * // Delete one Medicines
     * const Medicines = await prisma.medicines.delete({
     *   where: {
     *     // ... filter to delete one Medicines
     *   }
     * })
     *
     */
    delete<T extends MedicinesDeleteArgs>(args: Prisma.SelectSubset<T, MedicinesDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Medicines.
     * @param {MedicinesUpdateArgs} args - Arguments to update one Medicines.
     * @example
     * // Update one Medicines
     * const medicines = await prisma.medicines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MedicinesUpdateArgs>(args: Prisma.SelectSubset<T, MedicinesUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Medicines.
     * @param {MedicinesDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MedicinesDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicines = await prisma.medicines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MedicinesUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {MedicinesUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicines = await prisma.medicines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Medicines and only return the `id`
     * const medicinesWithIdOnly = await prisma.medicines.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MedicinesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MedicinesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Medicines.
     * @param {MedicinesUpsertArgs} args - Arguments to update or create a Medicines.
     * @example
     * // Update or create a Medicines
     * const medicines = await prisma.medicines.upsert({
     *   create: {
     *     // ... data to create a Medicines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicines we want to update
     *   }
     * })
     */
    upsert<T extends MedicinesUpsertArgs>(args: Prisma.SelectSubset<T, MedicinesUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicines.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicinesCountArgs>(args?: Prisma.Subset<T, MedicinesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicinesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicinesAggregateArgs>(args: Prisma.Subset<T, MedicinesAggregateArgs>): Prisma.PrismaPromise<GetMedicinesAggregateType<T>>;
    /**
     * Group by Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends MedicinesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicinesGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicinesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Medicines model
     */
    readonly fields: MedicinesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Medicines.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MedicinesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CategoriesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriesDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriesClient<runtime.Types.Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    seller<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviews<T extends Prisma.Medicines$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medicines$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItem<T extends Prisma.Medicines$orderItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medicines$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Medicines model
 */
export interface MedicinesFieldRefs {
    readonly id: Prisma.FieldRef<"Medicines", 'String'>;
    readonly name: Prisma.FieldRef<"Medicines", 'String'>;
    readonly description: Prisma.FieldRef<"Medicines", 'String'>;
    readonly price: Prisma.FieldRef<"Medicines", 'Float'>;
    readonly stock: Prisma.FieldRef<"Medicines", 'Int'>;
    readonly manufacturer: Prisma.FieldRef<"Medicines", 'String'>;
    readonly image: Prisma.FieldRef<"Medicines", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Medicines", 'String'>;
    readonly views: Prisma.FieldRef<"Medicines", 'Int'>;
    readonly sellerId: Prisma.FieldRef<"Medicines", 'String'>;
}
/**
 * Medicines findUnique
 */
export type MedicinesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where: Prisma.MedicinesWhereUniqueInput;
};
/**
 * Medicines findUniqueOrThrow
 */
export type MedicinesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where: Prisma.MedicinesWhereUniqueInput;
};
/**
 * Medicines findFirst
 */
export type MedicinesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Prisma.MedicinesOrderByWithRelationInput | Prisma.MedicinesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Medicines.
     */
    cursor?: Prisma.MedicinesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Medicines.
     */
    distinct?: Prisma.MedicinesScalarFieldEnum | Prisma.MedicinesScalarFieldEnum[];
};
/**
 * Medicines findFirstOrThrow
 */
export type MedicinesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Prisma.MedicinesOrderByWithRelationInput | Prisma.MedicinesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Medicines.
     */
    cursor?: Prisma.MedicinesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Medicines.
     */
    distinct?: Prisma.MedicinesScalarFieldEnum | Prisma.MedicinesScalarFieldEnum[];
};
/**
 * Medicines findMany
 */
export type MedicinesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Prisma.MedicinesOrderByWithRelationInput | Prisma.MedicinesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Medicines.
     */
    cursor?: Prisma.MedicinesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicines.
     */
    skip?: number;
    distinct?: Prisma.MedicinesScalarFieldEnum | Prisma.MedicinesScalarFieldEnum[];
};
/**
 * Medicines create
 */
export type MedicinesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Medicines.
     */
    data: Prisma.XOR<Prisma.MedicinesCreateInput, Prisma.MedicinesUncheckedCreateInput>;
};
/**
 * Medicines createMany
 */
export type MedicinesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: Prisma.MedicinesCreateManyInput | Prisma.MedicinesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Medicines createManyAndReturn
 */
export type MedicinesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * The data used to create many Medicines.
     */
    data: Prisma.MedicinesCreateManyInput | Prisma.MedicinesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Medicines update
 */
export type MedicinesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Medicines.
     */
    data: Prisma.XOR<Prisma.MedicinesUpdateInput, Prisma.MedicinesUncheckedUpdateInput>;
    /**
     * Choose, which Medicines to update.
     */
    where: Prisma.MedicinesWhereUniqueInput;
};
/**
 * Medicines updateMany
 */
export type MedicinesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: Prisma.XOR<Prisma.MedicinesUpdateManyMutationInput, Prisma.MedicinesUncheckedUpdateManyInput>;
    /**
     * Filter which Medicines to update
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * Limit how many Medicines to update.
     */
    limit?: number;
};
/**
 * Medicines updateManyAndReturn
 */
export type MedicinesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * The data used to update Medicines.
     */
    data: Prisma.XOR<Prisma.MedicinesUpdateManyMutationInput, Prisma.MedicinesUncheckedUpdateManyInput>;
    /**
     * Filter which Medicines to update
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * Limit how many Medicines to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Medicines upsert
 */
export type MedicinesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Medicines to update in case it exists.
     */
    where: Prisma.MedicinesWhereUniqueInput;
    /**
     * In case the Medicines found by the `where` argument doesn't exist, create a new Medicines with this data.
     */
    create: Prisma.XOR<Prisma.MedicinesCreateInput, Prisma.MedicinesUncheckedCreateInput>;
    /**
     * In case the Medicines was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MedicinesUpdateInput, Prisma.MedicinesUncheckedUpdateInput>;
};
/**
 * Medicines delete
 */
export type MedicinesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter which Medicines to delete.
     */
    where: Prisma.MedicinesWhereUniqueInput;
};
/**
 * Medicines deleteMany
 */
export type MedicinesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number;
};
/**
 * Medicines.reviews
 */
export type Medicines$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: Prisma.ReviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reviews
     */
    omit?: Prisma.ReviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReviewsInclude<ExtArgs> | null;
    where?: Prisma.ReviewsWhereInput;
    orderBy?: Prisma.ReviewsOrderByWithRelationInput | Prisma.ReviewsOrderByWithRelationInput[];
    cursor?: Prisma.ReviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewsScalarFieldEnum | Prisma.ReviewsScalarFieldEnum[];
};
/**
 * Medicines.orderItem
 */
export type Medicines$orderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
/**
 * Medicines without action
 */
export type MedicinesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Medicines.d.ts.map