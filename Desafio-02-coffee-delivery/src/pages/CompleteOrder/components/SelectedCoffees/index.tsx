import { useCart } from "../../../../hooks/useCart";
import { TitleText } from "../../../../components/Typography";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
	const { cartItems } = useCart();

	return (
		<SelectedCoffeesContainer>
			<TitleText size="xs" color="subtitle">
				Cafés selecionados
			</TitleText>

			<DetailsContainer>
				<CoffeeCartCard />
				<CoffeeCartCard />
				<CoffeeCartCard />

				<ConfirmationSection />
			</DetailsContainer>
		</SelectedCoffeesContainer>
	);
}
