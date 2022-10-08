import { PaymentMethodOptionsContainer } from "./styles";
import { CreditCard, Money, Bank } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { RegularText } from "../../../../components/Typography";

export const paymentMethods = {
	credit: {
		label: "Cartão de crédito",
		icon: <CreditCard size={16} />,
	},
	debit: {
		label: "Cartão de débito",
		icon: <Bank size={16} />,
	},
	money: {
		label: "Dinheiro",
		icon: <Money size={16} />,
	},
};

export function PaymentMethodOptions() {
	return (
		<PaymentMethodOptionsContainer>
			{Object.entries(paymentMethods).map(([key, { label, icon }]) => (
				<PaymentMethodInput
					key={label}
					id={key}
					icon={icon}
					label={label}
					value={key}
				/>
			))}
		</PaymentMethodOptionsContainer>
	);
}
