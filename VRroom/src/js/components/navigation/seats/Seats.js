import { Entity } from 'aframe-react'
import React from 'react'
import Seat from './Seat'

export default class Seats extends React.Component {
	opacity = { x: 0 }
	Z_Axis = -3
	// row_1 = 2
	// row_2 = 1.85
	// row_3 = 1.7
	// row_4 = 1.55
	// row_5 = 1.4
	// row_6 = 1.25
	// row_7 = 1.1
	// row_8 = 0.95
	// row_9 = 0.8
	row_10 = 0.65
	row_11 = 0.5
	row_12 = 0.35
	row_13 = 0.2
	row_14 = 0.05
	row_15 = -0.1
	row_16 = -0.25
	row_17 = -0.4

	x_1 = 0
	x_2 = 0.25
	x_3 = -0.25
	x_4 = 0.5
	x_5 = -0.5
	x_6 = 0.74
	x_7 = -0.75
	x_8 = 1
	x_9 = -1
	x_10 = 1.25
	x_11 = -1.25
	x_12 = 1.5
	x_13 = -1.5
	x_14 = 1.75
	x_15 = -1.75
	x_16 = 2
	x_17 = -2
	x_18 = 2.25

	x_19 = 0.125
	x_20 = 0.375
	x_21 = -0.125
	x_22 = 0.625
	x_23 = -0.375
	x_24 = 0.875
	x_25 = -0.625
	x_26 = 1.125
	x_27 = -0.875

	x_28 = -1.125
	x_29 = 1.375
	x_30 = -1.375
	x_31 = 1.625
	x_32 = -1.625
	x_33 = 1.875
	x_34 = -1.875
	x_35 = 2.125
	x_36 = -2.125
	x_37 = 2.375
	x_38 = -2.375
	x_39 = 2.625
	x_40 = -2.625
	x_41 = 2.875

	seatButtonCoordinates = [
		[{ id: 'S1_1' }, { pos: [this.x_1, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_2' }, { pos: [this.x_2, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_3' }, { pos: [this.x_3, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_4' }, { pos: [this.x_4, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_5' }, { pos: [this.x_5, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_6' }, { pos: [this.x_6, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_7' }, { pos: [this.x_7, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_8' }, { pos: [this.x_8, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_9' }, { pos: [this.x_9, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_10' }, { pos: [this.x_10, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_11' }, { pos: [this.x_11, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_12' }, { pos: [this.x_12, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_13' }, { pos: [this.x_13, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_14' }, { pos: [this.x_14, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_15' }, { pos: [this.x_15, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_16' }, { pos: [this.x_16, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_17' }, { pos: [this.x_17, this.row_1, this.Z_Axis] }],
		[{ id: 'S1_18' }, { pos: [this.x_18, this.row_1, this.Z_Axis] }],

		[{ id: 'S2_1' }, { pos: [this.x_19, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_2' }, { pos: [this.x_20, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_3' }, { pos: [this.x_21, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_4' }, { pos: [this.x_22, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_5' }, { pos: [this.x_23, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_6' }, { pos: [this.x_24, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_7' }, { pos: [this.x_25, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_8' }, { pos: [this.x_26, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_9' }, { pos: [this.x_27, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_10' }, { pos: [this.x_11, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_11' }, { pos: [this.x_12, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_12' }, { pos: [this.x_13, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_13' }, { pos: [this.x_14, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_14' }, { pos: [this.x_15, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_15' }, { pos: [this.x_16, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_16' }, { pos: [this.x_17, this.row_2, this.Z_Axis] }],
		[{ id: 'S2_17' }, { pos: [this.x_18, this.row_2, this.Z_Axis] }],

		[{ id: 'S3_1' }, { pos: [this.x_1, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_2' }, { pos: [this.x_2, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_3' }, { pos: [this.x_3, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_4' }, { pos: [this.x_4, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_5' }, { pos: [this.x_5, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_6' }, { pos: [this.x_6, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_7' }, { pos: [this.x_7, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_8' }, { pos: [this.x_8, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_9' }, { pos: [this.x_9, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_10' }, { pos: [this.x_10, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_11' }, { pos: [this.x_11, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_12' }, { pos: [this.x_12, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_13' }, { pos: [this.x_13, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_14' }, { pos: [this.x_14, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_15' }, { pos: [this.x_15, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_16' }, { pos: [this.x_16, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_17' }, { pos: [this.x_17, this.row_3, this.Z_Axis] }],
		[{ id: 'S3_18' }, { pos: [this.x_18, this.row_3, this.Z_Axis] }],

		[{ id: 'S4_1' }, { pos: [this.x_19, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_2' }, { pos: [this.x_20, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_3' }, { pos: [this.x_21, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_4' }, { pos: [this.x_22, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_5' }, { pos: [this.x_23, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_6' }, { pos: [this.x_24, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_7' }, { pos: [this.x_25, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_8' }, { pos: [this.x_26, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_9' }, { pos: [this.x_27, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_10' }, { pos: [this.x_11, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_11' }, { pos: [this.x_12, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_12' }, { pos: [this.x_13, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_13' }, { pos: [this.x_14, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_14' }, { pos: [this.x_15, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_15' }, { pos: [this.x_16, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_16' }, { pos: [this.x_17, this.row_4, this.Z_Axis] }],
		[{ id: 'S4_17' }, { pos: [this.x_18, this.row_4, this.Z_Axis] }],

		[{ id: 'S5_1' }, { pos: [this.x_1, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_2' }, { pos: [this.x_2, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_3' }, { pos: [this.x_3, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_4' }, { pos: [this.x_4, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_5' }, { pos: [this.x_5, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_6' }, { pos: [this.x_6, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_7' }, { pos: [this.x_7, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_8' }, { pos: [this.x_8, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_9' }, { pos: [this.x_9, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_10' }, { pos: [this.x_10, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_11' }, { pos: [this.x_11, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_12' }, { pos: [this.x_12, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_13' }, { pos: [this.x_13, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_14' }, { pos: [this.x_14, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_15' }, { pos: [this.x_15, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_16' }, { pos: [this.x_16, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_17' }, { pos: [this.x_17, this.row_5, this.Z_Axis] }],
		[{ id: 'S5_18' }, { pos: [this.x_18, this.row_5, this.Z_Axis] }],

		[{ id: 'S6_1' }, { pos: [this.x_19, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_2' }, { pos: [this.x_20, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_3' }, { pos: [this.x_21, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_4' }, { pos: [this.x_22, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_5' }, { pos: [this.x_23, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_6' }, { pos: [this.x_24, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_7' }, { pos: [this.x_25, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_8' }, { pos: [this.x_26, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_9' }, { pos: [this.x_27, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_10' }, { pos: [this.x_11, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_11' }, { pos: [this.x_12, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_12' }, { pos: [this.x_13, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_13' }, { pos: [this.x_14, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_14' }, { pos: [this.x_15, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_15' }, { pos: [this.x_16, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_16' }, { pos: [this.x_17, this.row_6, this.Z_Axis] }],
		[{ id: 'S6_17' }, { pos: [this.x_18, this.row_6, this.Z_Axis] }],

		[{ id: 'S7_1' }, { pos: [this.x_1, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_2' }, { pos: [this.x_2, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_3' }, { pos: [this.x_3, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_4' }, { pos: [this.x_4, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_5' }, { pos: [this.x_5, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_6' }, { pos: [this.x_6, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_7' }, { pos: [this.x_7, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_8' }, { pos: [this.x_8, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_9' }, { pos: [this.x_9, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_10' }, { pos: [this.x_10, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_11' }, { pos: [this.x_11, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_12' }, { pos: [this.x_12, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_13' }, { pos: [this.x_13, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_14' }, { pos: [this.x_14, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_15' }, { pos: [this.x_15, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_16' }, { pos: [this.x_16, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_17' }, { pos: [this.x_17, this.row_7, this.Z_Axis] }],
		[{ id: 'S7_18' }, { pos: [this.x_18, this.row_7, this.Z_Axis] }],

		[{ id: 'S8_1' }, { pos: [this.x_23, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_2' }, { pos: [this.x_22, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_3' }, { pos: [this.x_25, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_4' }, { pos: [this.x_24, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_5' }, { pos: [this.x_27, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_6' }, { pos: [this.x_26, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_7' }, { pos: [this.x_28, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_8' }, { pos: [this.x_29, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_9' }, { pos: [this.x_30, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_10' }, { pos: [this.x_31, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_11' }, { pos: [this.x_32, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_12' }, { pos: [this.x_33, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_13' }, { pos: [this.x_34, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_14' }, { pos: [this.x_35, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_15' }, { pos: [this.x_36, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_16' }, { pos: [this.x_37, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_17' }, { pos: [this.x_38, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_18' }, { pos: [this.x_39, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_19' }, { pos: [this.x_40, this.row_8, this.Z_Axis] }],
		[{ id: 'S8_20' }, { pos: [this.x_41, this.row_8, this.Z_Axis] }],

		[{ id: 'S9_1' }, { pos: [this.x_23, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_2' }, { pos: [this.x_22, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_3' }, { pos: [this.x_25, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_4' }, { pos: [this.x_24, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_5' }, { pos: [this.x_27, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_6' }, { pos: [this.x_26, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_7' }, { pos: [this.x_28, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_8' }, { pos: [this.x_29, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_9' }, { pos: [this.x_30, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_10' }, { pos: [this.x_31, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_11' }, { pos: [this.x_32, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_12' }, { pos: [this.x_33, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_13' }, { pos: [this.x_34, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_14' }, { pos: [this.x_35, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_15' }, { pos: [this.x_36, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_16' }, { pos: [this.x_37, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_17' }, { pos: [this.x_38, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_18' }, { pos: [this.x_39, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_19' }, { pos: [this.x_40, this.row_9, this.Z_Axis] }],
		[{ id: 'S9_20' }, { pos: [this.x_41, this.row_9, this.Z_Axis] }],

		[{ id: 'S10_1' }, { pos: [this.x_23, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_2' }, { pos: [this.x_22, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_3' }, { pos: [this.x_25, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_4' }, { pos: [this.x_24, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_5' }, { pos: [this.x_27, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_6' }, { pos: [this.x_26, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_7' }, { pos: [this.x_28, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_8' }, { pos: [this.x_29, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_9' }, { pos: [this.x_30, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_10' }, { pos: [this.x_31, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_11' }, { pos: [this.x_32, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_12' }, { pos: [this.x_33, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_13' }, { pos: [this.x_34, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_14' }, { pos: [this.x_35, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_15' }, { pos: [this.x_36, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_16' }, { pos: [this.x_37, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_17' }, { pos: [this.x_38, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_18' }, { pos: [this.x_39, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_19' }, { pos: [this.x_40, this.row_10, this.Z_Axis] }],
		[{ id: 'S10_20' }, { pos: [this.x_41, this.row_10, this.Z_Axis] }],

		[{ id: 'S11_1' }, { pos: [this.x_23, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_2' }, { pos: [this.x_22, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_3' }, { pos: [this.x_25, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_4' }, { pos: [this.x_24, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_5' }, { pos: [this.x_27, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_6' }, { pos: [this.x_26, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_7' }, { pos: [this.x_28, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_8' }, { pos: [this.x_29, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_9' }, { pos: [this.x_30, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_10' }, { pos: [this.x_31, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_11' }, { pos: [this.x_32, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_12' }, { pos: [this.x_33, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_13' }, { pos: [this.x_34, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_14' }, { pos: [this.x_35, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_15' }, { pos: [this.x_36, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_16' }, { pos: [this.x_37, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_17' }, { pos: [this.x_38, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_18' }, { pos: [this.x_39, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_19' }, { pos: [this.x_40, this.row_11, this.Z_Axis] }],
		[{ id: 'S11_20' }, { pos: [this.x_41, this.row_11, this.Z_Axis] }],

		[{ id: 'S12_1' }, { pos: [this.x_23, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_2' }, { pos: [this.x_22, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_3' }, { pos: [this.x_25, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_4' }, { pos: [this.x_24, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_5' }, { pos: [this.x_27, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_6' }, { pos: [this.x_26, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_7' }, { pos: [this.x_28, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_8' }, { pos: [this.x_29, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_9' }, { pos: [this.x_30, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_10' }, { pos: [this.x_31, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_11' }, { pos: [this.x_32, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_12' }, { pos: [this.x_33, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_13' }, { pos: [this.x_34, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_14' }, { pos: [this.x_35, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_15' }, { pos: [this.x_36, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_16' }, { pos: [this.x_37, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_17' }, { pos: [this.x_38, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_18' }, { pos: [this.x_39, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_19' }, { pos: [this.x_40, this.row_12, this.Z_Axis] }],
		[{ id: 'S12_20' }, { pos: [this.x_41, this.row_12, this.Z_Axis] }],

		[{ id: 'S13_1' }, { pos: [this.x_27, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_2' }, { pos: [this.x_26, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_3' }, { pos: [this.x_28, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_4' }, { pos: [this.x_29, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_5' }, { pos: [this.x_30, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_6' }, { pos: [this.x_31, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_7' }, { pos: [this.x_32, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_8' }, { pos: [this.x_33, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_9' }, { pos: [this.x_34, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_10' }, { pos: [this.x_35, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_11' }, { pos: [this.x_36, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_12' }, { pos: [this.x_37, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_13' }, { pos: [this.x_38, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_14' }, { pos: [this.x_39, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_15' }, { pos: [this.x_40, this.row_13, this.Z_Axis] }],
		[{ id: 'S13_16' }, { pos: [this.x_41, this.row_13, this.Z_Axis] }],

		[{ id: 'S14_1' }, { pos: [this.x_27, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_2' }, { pos: [this.x_26, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_3' }, { pos: [this.x_28, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_4' }, { pos: [this.x_29, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_5' }, { pos: [this.x_30, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_6' }, { pos: [this.x_31, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_7' }, { pos: [this.x_32, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_8' }, { pos: [this.x_33, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_9' }, { pos: [this.x_34, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_10' }, { pos: [this.x_35, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_11' }, { pos: [this.x_36, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_12' }, { pos: [this.x_37, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_13' }, { pos: [this.x_38, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_14' }, { pos: [this.x_39, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_15' }, { pos: [this.x_40, this.row_14, this.Z_Axis] }],
		[{ id: 'S14_16' }, { pos: [this.x_41, this.row_14, this.Z_Axis] }],

		[{ id: 'S15_1' }, { pos: [this.x_27, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_2' }, { pos: [this.x_26, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_3' }, { pos: [this.x_28, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_4' }, { pos: [this.x_29, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_5' }, { pos: [this.x_30, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_6' }, { pos: [this.x_31, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_7' }, { pos: [this.x_32, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_8' }, { pos: [this.x_33, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_9' }, { pos: [this.x_34, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_10' }, { pos: [this.x_35, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_11' }, { pos: [this.x_36, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_12' }, { pos: [this.x_37, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_13' }, { pos: [this.x_38, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_14' }, { pos: [this.x_39, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_15' }, { pos: [this.x_40, this.row_15, this.Z_Axis] }],
		[{ id: 'S15_16' }, { pos: [this.x_41, this.row_15, this.Z_Axis] }],

		[{ id: 'S16_1' }, { pos: [this.x_25, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_2' }, { pos: [this.x_24, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_3' }, { pos: [this.x_27, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_4' }, { pos: [this.x_26, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_5' }, { pos: [this.x_28, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_6' }, { pos: [this.x_29, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_7' }, { pos: [this.x_30, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_8' }, { pos: [this.x_31, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_9' }, { pos: [this.x_32, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_10' }, { pos: [this.x_33, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_11' }, { pos: [this.x_34, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_12' }, { pos: [this.x_35, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_13' }, { pos: [this.x_36, this.row_16, this.Z_Axis] }],
		[{ id: 'S16_14' }, { pos: [this.x_37, this.row_16, this.Z_Axis] }],

		[{ id: 'S17_1' }, { pos: [this.x_23, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_2' }, { pos: [this.x_22, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_3' }, { pos: [this.x_25, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_4' }, { pos: [this.x_24, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_5' }, { pos: [this.x_27, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_6' }, { pos: [this.x_26, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_7' }, { pos: [this.x_28, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_8' }, { pos: [this.x_29, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_9' }, { pos: [this.x_30, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_10' }, { pos: [this.x_31, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_11' }, { pos: [this.x_32, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_12' }, { pos: [this.x_33, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_13' }, { pos: [this.x_34, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_14' }, { pos: [this.x_35, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_15' }, { pos: [this.x_36, this.row_17, this.Z_Axis] }],
		[{ id: 'S17_16' }, { pos: [this.x_37, this.row_17, this.Z_Axis] }],
	]

	red = '#00937c'

	constructor(props) {
		super(props)

		this.state = {
			opacity: this.opacity,
			visible: false,
		}

		this.fadeIn = this.fadeIn.bind(this)
		this.tweenUpdate = this.tweenUpdate.bind(this)
		this.fadeOut = this.fadeOut.bind(this)
	}

	//FadeIn Animation

	fadeIn() {
		this.setState({ visible: true })

		let newOpacity = { x: 1 }
		let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 500)
		tween.start()

		tween.onUpdate(this.tweenUpdate)
	}

	//FadeOut Animation

	fadeOut() {
		setTimeout(() => {
			this.setState({ visible: false })
		}, 501)

		let newOpacity = { x: 0 }
		let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 500)
		tween.start()

		tween.onUpdate(this.tweenUpdate)
	}

	tweenUpdate() {
		this.setState({ opacity: this.opacity })
	}

	render() {
		return (
			<Entity visible={this.state.visible}>
				{this.seatButtonCoordinates.map(function (seat) {
					return (
						<Seat
							componentId={seat[0].id}
							seatPos={seat[1].pos}
							key={seat[0].id}
							Opacity={this.state.opacity.x}
							seatAnimation={this.props.seatAnimation}
							buttonColor={this.red}
						/>
					)
				}, this)}
			</Entity>
		)
	}
}
