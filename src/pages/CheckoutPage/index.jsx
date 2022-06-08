import React, { useState } from "react"
import { YMaps, Map } from "react-yandex-maps"
import { useSelector } from "react-redux"

import CheckoutProd from "../../components/CheckoutProd"

import arrowDownPayment from "./img/arrow-down-payment.svg"
import arrowDownInput from "./img/arrow-down-input.svg"
import paymentArrowRight from "./img/payment-arrow-right.svg"
import inputPen from "./img/input-pen.svg"
import marker from "./img/marker.svg"
import paymentType from "./img/payment-type.svg"
import promo from "./img/promo.svg"
import "./checkoutPage.scss"

export default function CheckoutPage() {
	const prods = useSelector((state) => state.cart.prods)
	const totalCartPrice = useSelector((state) => state.cart.totalCartPrice)

	const [city, setCity] = useState("")
	const [cityDirty, setCityDirty] = useState(false)
	const [cityError, setCityError] = useState("Поле не может быть пустым")

	const [street, setStreet] = useState("")
	const [streetDirty, setStreetDirty] = useState(false)
	const [streetError, setStreetError] = useState("Поле не может быть пустым")

	const [house, setHouse] = useState("")
	const [houseDirty, setHouseDirty] = useState(false)
	const [houseError, setHouseError] = useState("Поле не может быть пустым")

	const [entrance, setEntrance] = useState("")
	const [entranceDirty, setEntranceDirty] = useState(false)
	const [entranceError, setEntranceError] = useState("Поле не может быть пустым")

	const [flat, setFlat] = useState("")
	const [flatDirty, setFlatDirty] = useState(false)
	const [flatError, setFlatError] = useState("Поле не может быть пустым")

	const [phone, setPhone] = useState("")
	const [phoneDirty, setPhoneDirty] = useState(false)
	const [phoneError, setPhoneError] = useState("Поле не может быть пустым")

	const [formValid, setFormValid] = useState(false)

	const cityHandler = (e) => {
		setCity(e.target.value)
		const reg = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
		if (!reg.test(String(e.target.value).toLocaleLowerCase())) {
			setCityError("Некоррректный адрес")
		} else {
			setCityError("")
		}
	}
	const streetHandler = (e) => {
		setStreet(e.target.value)
		const reg = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
		if (!reg.test(String(e.target.value).toLocaleLowerCase())) {
			setStreetError("Некоррректный адрес")
		} else {
			setStreetError("")
		}
	}
	const houseHandler = (e) => {
		setHouse(e.target.value)
		const reg = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
		if (!reg.test(String(e.target.value).toLocaleLowerCase())) {
			setHouseError("Некоррректный адрес")
		} else {
			setHouseError("")
		}
	}
	const entranceHandler = (e) => {
		setEntrance(e.target.value)
		const reg = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
		if (!reg.test(String(e.target.value).toLocaleLowerCase())) {
			setEntranceError("Некоррректный адрес")
		} else {
			setEntranceError("")
		}
	}
	const flatHandler = (e) => {
		setFlat(e.target.value)
		const reg = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
		if (!reg.test(String(e.target.value).toLocaleLowerCase())) {
			setFlatError("Некоррректный адрес")
		} else {
			setFlatError("")
		}
	}

	const phoneHandler = (e) => {
		setPhone(e.target.value)
		const reg = /^[0-9\ \+\b]+$/
		if (!reg.test(e.target.value)) {
			setPhoneError("Некоррректный номер")
		} else {
			setPhoneError("")
		}
	}

	React.useEffect(() => {
		if ((cityError || phoneError || streetError || flatError, entranceError, houseError)) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [cityError, phoneError, streetError, flatError, entranceError, houseError])

	const blurHandler = (e) => {
		switch (e.target.name) {
			case "city":
				setCityDirty(true)
				break
			case "street":
				setStreetDirty(true)
				break
			case "house":
				setHouseDirty(true)
				break
			case "entrance":
				setEntranceDirty(true)
				break
			case "flat":
				setFlatDirty(true)
				break
			case "phone":
				setPhoneDirty(true)
				break
		}
	}

	return (
		<div className='checkout'>
			<div className='checkout__title'>Оформление заказа</div>
			<div className='checkout__inner'>
				<div className='delivery'>
					<div className='delivery__type'>
						<div className='delivery__type-title'>Доставка курьером</div>
						<div className='delivery__type-cost'> 499 ₸</div>
					</div>
					<div className='delivery__map'>
						<YMaps>
							<Map
								style={{ height: "146px", width: "375px" }}
								defaultState={{ center: [43.23558, 76.826555], zoom: 16 }}
							/>
						</YMaps>
					</div>
					<div className='delivery__address'>
						<div className='delivery__address-title'>
							<img src={marker} alt='marker' />
							<span>Адрес доставки</span>
						</div>
						<div className='delivery__address-inputs'>
							<div
								className={
									cityDirty && cityError
										? "delivery__address-input delivery__address-input--invalid"
										: "delivery__address-input"
								}
							>
								<input
									onBlur={(e) => blurHandler(e)}
									onChange={(e) => cityHandler(e)}
									className={cityHandler && "delivery__address-input--valid"}
									name='city'
									value={cityDirty && cityError ? cityError : city}
									type='text'
									placeholder={cityDirty && cityError ? cityError : "Город"}
								/>
								<img src={arrowDownInput} alt='arrowDownInput' />
							</div>
							<div
								className={
									streetDirty && streetError
										? "delivery__address-input delivery__address-input--invalid"
										: "delivery__address-input"
								}
							>
								<input
									onBlur={(e) => blurHandler(e)}
									onChange={(e) => streetHandler(e)}
									className={cityHandler && "delivery__address-input--valid"}
									name='street'
									value={street}
									type='text'
									placeholder={streetDirty && streetError ? streetError : "Улица / Район"}
								/>
								<img src={inputPen} alt='inputPen' />
							</div>
							<div
								className={
									houseDirty && houseError
										? "delivery__address-input delivery__address-input--invalid"
										: "delivery__address-input"
								}
							>
								<input
									onBlur={(e) => blurHandler(e)}
									onChange={(e) => houseHandler(e)}
									className={cityHandler && "delivery__address-input--valid"}
									name='house'
									value={houseDirty && houseError ? houseError : house}
									type='text'
									placeholder={houseDirty && houseError ? houseError : "Дом"}
								/>
								<img src={inputPen} alt='inputPen' />
							</div>
							<div
								className={
									entranceDirty && entranceError
										? "delivery__address-input delivery__address-input--invalid"
										: "delivery__address-input"
								}
							>
								<input
									onBlur={(e) => blurHandler(e)}
									onChange={(e) => entranceHandler(e)}
									className={cityHandler && "delivery__address-input--valid"}
									name='entrance'
									value={entranceDirty && entranceError ? entranceError : entrance}
									type='text'
									placeholder={entranceDirty && entranceError ? entranceError : "Подъезд"}
								/>
								<img src={inputPen} alt='inputPen' />
							</div>
							<div
								className={
									flatDirty && flatError
										? "delivery__address-input delivery__address-input--invalid"
										: "delivery__address-input"
								}
							>
								<input
									onBlur={(e) => blurHandler(e)}
									onChange={(e) => flatHandler(e)}
									className={cityHandler && "delivery__address-input--valid"}
									name='flat'
									value={flatDirty && flatError ? flatError : flat}
									type='text'
									placeholder={flatDirty && flatError ? flatError : "Квартира"}
								/>
								<img src={inputPen} alt='inputPen' />
							</div>
						</div>
					</div>
				</div>
				<div className='checkout__info'>
					<div className='prods'>
						<div className='prods__title'>Ваш заказ</div>
						<div className='prods__items'>
							{prods.map((obj, id) => (
								<CheckoutProd key={id} {...obj} />
							))}
							<div className='prods__delivery'>
								Доставка:
								<span>₸ 499</span>
							</div>
							<div className='prods__cost'>
								К оплате:
								<span>₸ {totalCartPrice + 499}</span>
							</div>
						</div>
					</div>
					<div className='payment'>
						<div className='payment__title'>Способ оплаты</div>
						<div className='payment__types'>
							<img className='select__img' src={paymentType} alt='paymentType' />
							<div className='payment__select'>
								<select className='select__text' name='payment' id='payment'>
									<option className='select__text option' value='Счет на kaspi.kz'>
										Счет на kaspi.kz
									</option>
									<option className='select__text option' value='Mastercard'>
										Mastercard
									</option>
								</select>
							</div>
							<img className='select__arrow' src={arrowDownPayment} alt='arrowDownPayment' />
						</div>
						<div className='payment__promo'>
							<img className='select__img' src={promo} alt='promo' />
							<input className='select__text' type='text' placeholder='Есть промокод?' />
							<img className='select__arrow' src={paymentArrowRight} alt='paymentArrowRight' />
						</div>
					</div>
					<div className='number'>
						<div className='number__inner'>
							<div className='number__title'>Номер получателя</div>
							<div
								className={
									phoneDirty && phoneError
										? "number__input delivery__address-input--invalid"
										: "number__input"
								}
							>
								<input
									type='tel'
									onBlur={(e) => blurHandler(e)}
									onChange={(e) => phoneHandler(e)}
									className={phoneHandler && "delivery__address-input--valid"}
									name='phone'
									value={phoneDirty && phoneError ? phoneError : phone}
									placeholder={phoneDirty && phoneError ? phoneError : "+7 (___) ___ __ __"}
								/>
								<img src={inputPen} alt='inputPen' />
							</div>
						</div>
					</div>
					<button
						className={formValid ? "confirm" : "confirm confirm--disabled"}
						type='submit'
						disabled={!formValid}
					>
						Закончить оформление
					</button>
				</div>
			</div>
		</div>
	)
}
