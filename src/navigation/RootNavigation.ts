/*
 * @Author: yujunfan
 * @Date: 2023-03-14 08:59:26
 * @LastEditors: yujunfan
 * @LastEditTime: 2023-03-14 09:26:02
 * @Description: 用于在无法访问navigation prop 的地方触发导航操作
 */

import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params as never);
  }
}
