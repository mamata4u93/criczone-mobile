import React, { useState } from 'react'
import { ImageBackground, ScrollView, Dimensions } from "react-native";
import styles from '../common/FormStyles'
import Images from '../common/Images'
import { useTranslation } from "react-i18next";
import Config from '../common/Config';
import { Box, Text, Image, Center, Button, SearchIcon, Menu, HStack, HamburgerIcon, Pressable, NativeBaseProvider, VStack } from "native-base";
import { Icons } from '../components';


const CricZone = () => {
    const { t } = useTranslation();
    const [fastTab, setFastTab] = useState('ongoing')

    return (
        <Box style={styles.container} pb='40'>

            <ScrollView>
                <Box bg="info.400">
                    <HStack space={10}>
                        <HStack />
                        <Box w="5%" mb="10">
                            <Menu w="190" trigger={triggerProps => {
                                return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <HamburgerIcon size="30" color="white" mt="2" />
                                </Pressable>
                            }}>
                                <Menu.Item>World</Menu.Item>
                                <Menu.Item>Africa</Menu.Item>
                                <Menu.Item>Asia</Menu.Item>
                                <Menu.Item>Europe</Menu.Item>
                                <Menu.Item>Middle East</Menu.Item>
                                <Menu.Item>Latin Amrica</Menu.Item>
                                <Menu.Item>UK</Menu.Item>
                                <Menu.Item>US & Canada</Menu.Item>
                                <Menu.Item>Paradise Papers</Menu.Item>
                                <Menu.Item>Business</Menu.Item>
                                <Menu.Item>Tech</Menu.Item>
                                <Menu.Item>Science</Menu.Item>
                                <Menu.Item>Hralth</Menu.Item>
                                <Menu.Item>Entretainment</Menu.Item>
                            </Menu>
                        </Box>
                        <HStack />
                        <HStack />
                        <Text fontSize="4xl" color="white" fontWeight="600">BBS NEWS</Text>
                        <HStack />
                        <HStack />
                        <SearchIcon size="10" color="white" mt="2" />
                        <HStack />
                        <HStack>
                            <Box w="5%" mb="10" mt="2">
                                <Menu w="190" trigger={triggerProps => {
                                    return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                        <Icons font={"Entypo"} name={"dots-three-vertical"} color={"white"} size={25} />
                                    </Pressable>
                                }}>
                                    <Menu.Item>Satting</Menu.Item>
                                    <Menu.Item>Help</Menu.Item>
                                    <Menu.Item>Contact us</Menu.Item>
                                    <Menu.Item>Other BBC apps</Menu.Item>
                                </Menu>
                            </Box>
                        </HStack>
                    </HStack>

                    {/* <HStack space={20} mx="5" mb="2">
                        <Text color="white" fontSize="sm">Top Stories</Text>
                        <Text color="white" fontSize="sm">Video</Text>
                        <Text color="white" fontSize="sm">My News</Text>
                        <Text color="white" fontSize="sm">Popular</Text>
                        <Text color="white" fontSize="sm">LIVE</Text>
                    </HStack> */}
                    <HStack space={20} mb="2">
                        {/* <Box justifyContent="space-between" flexDirection="row"> */}
                        <Button variant="link" onPress={() => (setFastTab('ongoing'))}><Text color="white" fontSize="lg">Top Stories</Text></Button>
                        <Button variant="link" onPress={() => (setFastTab('upcoming'))}><Text color="white" fontSize="lg">Video</Text></Button>
                        <Button variant="link" onPress={() => (setFastTab('completed'))}><Text color="white" fontSize="lg">My News</Text></Button>
                        <Button variant="link" onPress={() => (setFastTab('Popular'))}><Text color="white" fontSize="lg">Popular</Text></Button>
                        <Button variant="link" onPress={() => (setFastTab('LIVE'))}><Text color="white" fontSize="lg">LIVE</Text></Button>
                        {/* </Box> */}
                    </HStack>
                </Box>


                {fastTab == 'ongoing' && (<Box>
                    <Box bgColor="white" shadow={4} mb="5">
                        <Image h='300' w='100%' source={{
                            uri: Images.militarybase
                        }} />
                        <Text fontSize="4xl" fontWeight="600" mx="2">Russia blames sabotage for new Crimea blasts</Text>
                    </Box>
                    <Box bgColor="white" shadow={7} borderRadius="5">
                        <HStack space="4" ml="2">
                            <Image h='40' w='50%' source={{
                                uri: Images.nooria
                            }} />
                            <Box>
                                <Text fontSize="xl" fontWeight="600">Afghan contractors: 'I wish I'd never worked<br/>for the UK government</Text>
                                <HStack mt="20">
                                    <Text fontSize="lg" fontWeight="600">3h |</Text>
                                    <Button size="lg" variant="link" mt="-2">
                                        Science & Environment
                                    </Button>
                                </HStack>
                            </Box>
                        </HStack>
                    </Box>

                    <Box bgColor="white" shadow={7} borderRadius="5" mt="5">
                        <HStack space="4" ml="2">
                            <Image h='40' w='50%' source={{
                                uri: Images.china
                            }} />
                            <Box>
                                <Text fontSize="xl" fontWeight="600">China inducing rainfall to<br/>combat severe drought</Text>
                                <HStack mt="20">
                                    <Text fontSize="lg" fontWeight="600">13h |</Text>
                                    <Button size="lg" variant="link" mt="-2">
                                        China
                                    </Button>
                                </HStack>
                            </Box>
                        </HStack>
                    </Box>

                    <Box bgColor="white" shadow={7} borderRadius="5" mt="5">
                        <HStack space="4" ml="2">
                            <Image h='40' w='50%' source={{
                                uri: Images.nooria
                            }} />
                            <Box>
                                <Text fontSize="xl" fontWeight="600">Afghan contractors: 'I wish I'd never worked <br/>for the UK government</Text>
                                <HStack mt="20">
                                    <Text fontSize="lg" fontWeight="600">3h |</Text>
                                    <Button size="lg" variant="link" mt="-2">
                                        Science & Environment
                                    </Button>
                                </HStack>
                            </Box>
                        </HStack>
                    </Box>

                    <Box bgColor="white" shadow={7} borderRadius="5" mt="5">
                        <HStack space="4" ml="2">
                            <Image h='40' w='50%' source={{
                                uri: Images.china
                            }} />
                            <Box>
                                <Text fontSize="xl" fontWeight="600">China inducing rainfall to<br/>combat severe drought</Text>
                                <HStack mt="20">
                                    <Text fontSize="lg" fontWeight="600">13h |</Text>
                                    <Button size="lg" variant="link" mt="-2">
                                        China
                                    </Button>
                                </HStack>
                            </Box>
                        </HStack>
                    </Box>

                    <Box bgColor="white" shadow={4} my="5">
                        <Image h='300' w='100%' source={{
                            uri: Images.capitalkabul
                        }} />
                        <Text fontSize="4xl" fontWeight="600" mx="2">Kabul mosque attack: 'Many casualties feared'</Text>
                    </Box>

                    <Box bgColor="white" shadow={7} borderRadius="5" mt="5">
                        <HStack space="4" ml="2">
                            <Image h='40' w='50%' source={{
                                uri: Images.nooria
                            }} />
                            <Box>
                                <Text fontSize="xl" fontWeight="600">Afghan contractors: 'I wish I'd never worked<br/>for the UK government</Text>
                                <HStack mt="20" >
                                    <Text fontSize="lg" fontWeight="600">3h |</Text>
                                    <Button size="lg" variant="link" mt="-2">
                                        Science & Environment
                                    </Button>
                                </HStack>
                            </Box>
                        </HStack>
                    </Box>













                </Box>)}






















                {fastTab == 'upcoming' && (<Box><Text fontSize="2xl" color='black' >2</Text></Box>)}
                {fastTab == 'completed' && (<Box><Text fontSize="2xl" color='black' >3</Text></Box>)}
                {fastTab == 'Popular' && (<Box><Text fontSize="2xl" color='black' >13</Text></Box>)}
                {fastTab == 'LIVE' && (<Box><Text fontSize="2xl" color='black' >31</Text></Box>)}
            </ScrollView>

        </Box>
    )


}
export default CricZone