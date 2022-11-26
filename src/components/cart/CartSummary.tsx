import { useCart } from '../../hooks/useCart';
import { Stack, Title, Text, Flex, Button, Divider, ActionIcon, Modal } from '@mantine/core';
import { IconTrash } from '@tabler/icons';
import { useState } from 'react';

const CartSummary = () => {
	const { totalPrice } = useCart();
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const { clearCart } = useCart();

	return (
		<Stack>
			<Modal opened={modalIsVisible} onClose={() => setModalIsVisible(false)} title="You sure to clear cart?">
				<Flex gap={8}>
					<Button
						sx={{ flexGrow: 1 }}
						onClick={() => {
							clearCart();
							setModalIsVisible(false);
						}}
					>
						Yes
					</Button>
					<Button sx={{ flexGrow: 1 }} color={'gray'} onClick={() => setModalIsVisible(false)}>
						No
					</Button>
				</Flex>
			</Modal>
			<Flex align={'center'} justify={'space-between'}>
				<Title>Total</Title>
				<ActionIcon onClick={() => setModalIsVisible(true)}>
					<IconTrash color={'#f86060'} />
				</ActionIcon>
			</Flex>
			<Divider size={'lg'} />
			<Flex justify={'space-between'}>
				<Text>Total price</Text>
				<Text>{totalPrice().toFixed(2)} zł</Text>
			</Flex>
			<Button w={'100%'} variant={'gradient'} gradient={{ from: 'blue', to: 'teal', deg: 135 }}>
				Checkout
			</Button>
		</Stack>
	);
};

export default CartSummary;
