import React from 'react';
import {Table} from "react-bootstrap";
import mac_addresses from "../data/mac_addresses";

const MacAddressTable = () => {
	return (
		<>
			<Table striped bordered hover variant="dark">
				<thead>
				<tr>
					<th>Serial Number</th>
					<th>MAC1</th>
					<th>MAC2</th>
				</tr>
				</thead>
				<tbody>
				{/*<tr>*/}
				{/*	<td>1</td>*/}
				{/*	<td>Mark</td>*/}
				{/*	<td>Otto</td>*/}
				{/*	<td>@mdo</td>*/}
				{/*</tr>*/}
					{mac_addresses.map(
						sn_mac => (
							<tr>
								<td>{sn_mac.sn}</td>
								{sn_mac.mac.map(
									macs => (
										<td>{macs}</td>
									)
								)}
							</tr>
						)
					)}
				</tbody>
			</Table>
		</>
	);
};

export default MacAddressTable;