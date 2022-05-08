import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AuthLoginScreen from './AuthLogin';
import RenderConnected from '../../utils/test/RenderConnected';


test('เช๊คปุ่ม 3 ปุ่มบนหน้า login', () => {
  render(<RenderConnected><AuthLoginScreen /></RenderConnected>);


  const btnLogin = screen.getByText(/เข้าสู่ระบบ/)
  const btnRegis = screen.getByText(/ลงทะเบียนเข้าใช้งานระบบ/)
  const btnManual = screen.getByText(/คู่มือการใช้งาน/)

  expect(btnLogin).toBeInTheDocument();
  expect(btnRegis).toBeInTheDocument();
  expect(btnManual).toBeInTheDocument();

});

test('ตรวจหา input form [uid@rmuti , card_id]', () => {
  render(<RenderConnected><AuthLoginScreen /></RenderConnected>);


  const formUid = screen.getByPlaceholderText(/อินเตอร์ rmuti ไม่ต้องเติม @rmuti.ac.th/)
  const formPassowrd = screen.getByPlaceholderText(/รหัสบัตรประชาชน/)

  expect(formUid).toBeInTheDocument();
  expect(formPassowrd).toBeInTheDocument();

});


test('login แล้วไม่พบผู้ใช้งาน', async () => {
  render(<RenderConnected><AuthLoginScreen /></RenderConnected>);


  const formUid = screen.getByPlaceholderText(/อินเตอร์ rmuti ไม่ต้องเติม @rmuti.ac.th/)
  const formPassowrd = screen.getByPlaceholderText(/รหัสบัตรประชาชน/)
  fireEvent.change(formUid, {target: {value: 'test'}})
  fireEvent.change(formPassowrd, {target: {value: 'test'}})
  fireEvent.click(screen.getByText(/เข้าสู่ระบบ/))
  
  await waitFor(() => {
    const alertLogin = screen.getByText(/ไม่พบข้อมูลผู้ใช้งาน กรุณาลองทะเบียนก่อนเข้าใช้งานระบบ/)
    expect(alertLogin).toBeInTheDocument();   
  }, {timeout : 3000})
  
});


