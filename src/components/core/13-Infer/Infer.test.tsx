import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Infer from './Infer';
import RenderConnected from '../../../utils/test/RenderConnected';
import '@testing-library/jest-dom'


test('เข้าหน้า Infer ได้อย่างถูกต้อง', async () => {
    render(<RenderConnected location='/14' params={true} ><Infer /></RenderConnected>);

    const text = ['ข้อดีและลักษณะเฉพาะของการประดิษฐ์' , 'ที่มา ข้อมูลเบื้องต้น และความสำคัญของปัญหา/ ผลงาน' , 'สรุปจุดเด่นเทคโนโลยี/ ผลงาน']


    await waitFor(() => {
        expect(screen.getByText(text[0])).toBeInTheDocument();
    }, { timeout: 5000 })

    expect(screen.getByText(text[1])).toBeInTheDocument();
    expect(screen.getByText(text[2])).toBeInTheDocument();

});

test('(Infer) กรณีที่กรอกข้อมูลไม่ครบแล้วกด บันทึกข้อมูล', async () => {
    render(<RenderConnected location='/14' params={true} ><Infer /></RenderConnected>);

    await waitFor(() => {
        expect(screen.getByText('ข้อดีและลักษณะเฉพาะของการประดิษฐ์')).toBeInTheDocument();
    }, { timeout: 3000 })

    const infer_strength = screen.getByTestId('infer_strength')
    fireEvent.change(infer_strength, {target: {value: ''}})

    fireEvent.click(screen.getByText(/บันทึกข้อมูล/))

    await waitFor(() => {
        expect(screen.getByText('กรอกข้อมูลให้ครบ !')).toBeInTheDocument();
    }, { timeout: 3000 })

});


