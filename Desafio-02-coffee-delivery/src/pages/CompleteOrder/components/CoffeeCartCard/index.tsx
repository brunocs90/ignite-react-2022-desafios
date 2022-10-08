import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton, } from "./styles";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../contexts/CartContext";

interface CoffeeCartCardProps {
	coffee: CartItem;
}

export function CoffeeCartCard() {
	return (
		<CoffeeCartCardContainer>
			<div>
				<img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1665964800&Signature=Eu-RtupXCoVDj4jtAQUuU3d3QHm3oZlgEIZAj3SeOKdGYw2ZllBQjfV3S-7C9HBZkqqliW~qi1VJHIKINC8Hn1Ajpj76kYirHF60EiGpSUsbqLBkuwQIlWjIsy7AS9yxgThyh01ftrE10FBusbpiTpLvh13QWtZqisNZnDvOleonQjqhwB6~n8wQvADpp0v10a-ia8USNv-P2v8olm3BI-dWr97TrOkxFxZ2BwsMqUZhokCWgh1yahShZ9lgIb6FyEL8Iz-9nvRm05-zuAPAzey6yFHU8-3mSmdpbI8NjseUuhImf1pAVsKgHdaUH5B3kupWPUbCIfMlvRgODQSUtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
				<div>
					<RegularText color="subtitle">Expresso Tradicional</RegularText>
					<ActionsContainer>
						<QuantityInput
							size="small"
							quantity={5}
						/>
						<RemoveButton>
							<Trash size={16} />
							REMOVER
						</RemoveButton>
					</ActionsContainer>
				</div>
			</div>

			<p>R$ 9.90</p>
		</CoffeeCartCardContainer>
	);
}
