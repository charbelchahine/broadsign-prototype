import React from 'react'
import T from 'i18n-react'
import { push } from 'gatsby'
import i18n from '../i18n/config/i18n'

import { ListItem, MenuButton } from 'react-md';

class LangSelector extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: T.translate('path'),
			path:
				T.translate('path') && this.props.path.search(T.translate('path')) === 0
					? this.props.path.replace(T.translate('path'), '')
					: this.props.path
		}
	}

	handleChange = e => {
		this.setState({ value: e.target.value })
		push(e.target.value + this.state.path)
	}

	render() {
		return (
			<div className="langSelector">
				<select
					onChange={this.handleChange}
					value={this.state.value}
					aria-label="Language">
					{Object.keys(i18n).map((lang, index) => (
						<option key={index} value={i18n[lang].path}>
							{i18n[lang].name}
						</option>
					))}
				</select>
     <MenuButton
      anchor={{
        x: MenuButton.HorizontalAnchors.INNER_LEFT,
        y: MenuButton.VerticalAnchors.TOP,
      }}
      position={MenuButton.Positions.TOP_LEFT}
      flat
      primary
      menuItems={Object.keys(i18n).map((lang, index) => (
						<ListItem key={index} value={i18n[lang].path}
							primaryText={i18n[lang].name} />
						
					))}
    >
      Language
    </MenuButton>
			</div>
		)
	}	
}

export default LangSelector;
