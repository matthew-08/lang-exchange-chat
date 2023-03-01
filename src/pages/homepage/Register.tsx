/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import {
  Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack, HStack,
  Image,
  RadioGroup, Radio,
  FormHelperText,
  CheckboxGroup,
  Checkbox,
  ChakraProvider,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AccountContext } from './AccountContext';
import IMAGES from '../../images';

interface SignUpForm {
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
}

const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .required('This field is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: Yup.string()
    .required('This field is required')
    .email('email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must not exceed 20 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
    resolver: yupResolver(signUpSchema),
  });
  const [isBiggerThan700] = useMediaQuery('(min-width: 800px)');
  const submitData = async (data: SignUpForm) => {
    const sendToSever = await fetch('http://localhost:3000/auth/register', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch((err) => {

    }).then((res) => {
      if (res) {
        return res.json();
      }
    }).then((data) => setUser({ ...data }));
  };

  const checkInvalid = (input: keyof SignUpForm) => (!!errors[input]);

  return (
    <VStack
      as="form"
      spacing="2"
      onSubmit={handleSubmit(submitData)}
      border="1px"
      borderRadius="10px"
      width={isBiggerThan700 ? '60%' : '95%'}
      px={['0.7rem', '1.2rem']}
      mb="4rem"
    >
      <Heading
        mb="4rem"
      >
        Sign Up

      </Heading>
      <Flex
        justify="center"
        flexDir={isBiggerThan700 ? 'row' : 'column'}
        gap="1rem"
        width={isBiggerThan700 ? '80%' : '100%'}
      >
        <FormControl
          isInvalid={checkInvalid('username')}
        >
          <FormLabel>Username</FormLabel>
          <Input
            {...register('username', { required: true })}
            size="lg"
            type="text"
            placeholder="Enter Username..."
          />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={checkInvalid('email')}
        >
          <FormLabel>E-mail</FormLabel>
          <Input
            {...register('email', { required: true })}
            size="lg"
            type="email"
            placeholder="Enter Email..."
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex
        justify="center"
        flexDir={isBiggerThan700 ? 'row' : 'column'}
        gap="1rem"
        width={isBiggerThan700 ? '80%' : '100%'}
      >
        <FormControl
          isInvalid={checkInvalid('password')}
        >
          <FormLabel>Password</FormLabel>
          <Input
            {...register('password', { required: true })}
            size="lg"
            type="password"
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>

        </FormControl>
        <FormControl
          isInvalid={checkInvalid('confirmPassword')}
        >
          <FormLabel>Confirm Password</FormLabel>
          <Input
            {...register('confirmPassword', { required: true })}
            size="lg"
            type="password"
            mb="2rem"
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>

        </FormControl>
      </Flex>
      <HStack
        padding="1.5rem"
        border="1px"
        borderRadius="10px"
        as={Flex}
        flexWrap="wrap"
      >
        <FormControl as="fieldset">
          <FormLabel
            as="legend"
            fontSize="1.5rem"
          >
            What languages are you studying?

          </FormLabel>
          <CheckboxGroup
            defaultValue={['japanese']}
            size="lg"
          >
            <Flex
              gap="1rem"
              flexWrap="wrap"
              align={isBiggerThan700 ? 'center' : 'flex-start'}
              flexDir={isBiggerThan700 ? 'row' : 'column'}
            >
              <Checkbox
                icon={(
                  <Image
                    src={IMAGES.flags.japan}
                  />
)}
                value="japanese"
              >
                Japanese
              </Checkbox>
              <Checkbox
                value="chinese"
                icon={(
                  <Image
                    src={IMAGES.flags.china}
                  />
)}
              >
                Chinese

              </Checkbox>
              <Checkbox
                value="vietnamese"
                icon={(
                  <Image
                    src={IMAGES.flags.vietnam}
                  />
)}
              >
                Vietnamese

              </Checkbox>
              <Checkbox
                value="french"
                icon={(
                  <Image
                    src={IMAGES.flags.france}
                  />
)}
              >
                French

              </Checkbox>
              <Checkbox
                value="english"
                icon={(
                  <Image
                    src={IMAGES.flags.england}
                  />
)}
              >
                English

              </Checkbox>
            </Flex>
          </CheckboxGroup>
          <FormHelperText>
            * Due to low server capacity, we can only provide
            a select few languages.

          </FormHelperText>
        </FormControl>
      </HStack>
      <ButtonGroup
        size="lg"
        mt="2rem"
      >
        <Button
          mt="2rem"
          type="submit"
          mb="1rem"
        >
          Create Account

        </Button>
      </ButtonGroup>
    </VStack>
  );
}
